import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Utils
import {
    createCamera,
    createRenderer,
    runApp,
    updateLoadingProgressBar,
} from "./core-utils";
import { loadTexture } from "./common-utils";

// Assets
import DefaultMap from "./assets/map.png";
import Clouds from "./assets/Clouds.png";
import NightLights from "./assets/night_lights.png";

// Shaders
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

global.THREE = THREE;
THREE.ColorManagement.enabled = true;
THREE.ImageUtils.crossOrigin = null;

const params = {
    sunIntensity: 1.3,
    speedFactor: 10.0,
    metalness: 0.1,
    atmOpacity: { value: 0.7 },
    atmPowFactor: { value: 4.1 },
    atmMultiplier: { value: 9.5 },
};

export async function initPlanetScene(config = {}) {
    let scene = new THREE.Scene();
    const defaultConfig = {
        loadClouds: false,
        cloudsTexture: Clouds,
        planetTexture: DefaultMap,
    };
    config = { ...defaultConfig, ...config };
    console.log(config);

    let renderer = createRenderer({ antialias: true }, (_renderer) => {
        _renderer.outputColorSpace = THREE.SRGBColorSpace;
    });

    let camera = createCamera(60, 1, 1000, { x: 0, y: 0, z: 30 });

    let app = {
        async initScene() {
            this.controls = new OrbitControls(camera, renderer.domElement);
            this.controls.enableDamping = true;

            this.dirLight = new THREE.DirectionalLight(
                0xffffff,
                params.sunIntensity
            );
            this.dirLight.position.set(-50, 0, 30);
            scene.add(this.dirLight);
            await updateLoadingProgressBar(0.1);

            const albedoMap = await loadTexture(config.planetTexture);
            albedoMap.colorSpace = THREE.SRGBColorSpace;
            await updateLoadingProgressBar(0.2);

            let cloudsMap;
            if (config.loadClouds) {
                cloudsMap = await loadTexture(config.cloudsTexture);
                await updateLoadingProgressBar(0.4);
            }

            const lightsMap = await loadTexture(NightLights);
            await updateLoadingProgressBar(0.6);

            this.group = new THREE.Group();
            this.group.rotation.z = (23.5 / 360) * 2 * Math.PI;

            let earthGeo = new THREE.SphereGeometry(10, 64, 64);
            let earthMat = new THREE.MeshStandardMaterial({
                map: albedoMap,
                bumpScale: 0.03,
                metalness: params.metalness,
                emissiveMap: lightsMap,
                emissive: new THREE.Color(0xffff88),
            });
            this.earth = new THREE.Mesh(earthGeo, earthMat);
            this.group.add(this.earth);

            if (config.loadClouds) {
                let cloudGeo = new THREE.SphereGeometry(10.05, 64, 64);
                let cloudsMat = new THREE.MeshStandardMaterial({
                    alphaMap: cloudsMap,
                    transparent: true,
                });
                this.clouds = new THREE.Mesh(cloudGeo, cloudsMat);
                this.group.add(this.clouds);
                this.clouds.rotateY(-0.3);
            }

            this.earth.rotateY(-0.3);

            let atmosGeo = new THREE.SphereGeometry(12.5, 64, 64);
            let atmosMat = new THREE.ShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    atmOpacity: params.atmOpacity,
                    atmPowFactor: params.atmPowFactor,
                    atmMultiplier: params.atmMultiplier,
                },

                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
            });
            this.atmos = new THREE.Mesh(atmosGeo, atmosMat);
            this.group.add(this.atmos);

            scene.add(this.group);

            if (config.loadClouds) {
                this.loadCloudShaders(earthMat, cloudsMap);
            }

            await updateLoadingProgressBar(1.0, 100);
        },

        updateScene(interval) {
            this.controls.update();

            this.earth.rotateY(interval * 0.005 * params.speedFactor);
            if (this.clouds)
                this.clouds.rotateY(interval * 0.01 * params.speedFactor);

            const shader = this.earth.material.userData.shader;
            if (shader) {
                let offset =
                    (interval * 0.005 * params.speedFactor) / (2 * Math.PI);
                shader.uniforms.uv_xOffset.value += offset % 1;
            }
        },

        loadCloudShaders(earthMat, cloudsMap) {
            earthMat.onBeforeCompile = function (shader) {
                shader.uniforms.tClouds = { value: cloudsMap };
                shader.uniforms.tClouds.value.wrapS = THREE.RepeatWrapping;
                shader.uniforms.uv_xOffset = { value: 0 };
                shader.fragmentShader = shader.fragmentShader.replace(
                    "#include <common>",
                    `
        #include <common>
        uniform sampler2D tClouds;
        uniform float uv_xOffset;
      `
                );
                shader.fragmentShader = shader.fragmentShader.replace(
                    "#include <roughnessmap_fragment>",
                    `
        float roughnessFactor = roughness;

        #ifdef USE_ROUGHNESSMAP

          vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
          // reversing the black and white values because we provide the ocean map
          texelRoughness = vec4(1.0) - texelRoughness;

          // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
          roughnessFactor *= clamp(texelRoughness.g, 0.5, 1.0);

        #endif
      `
                );
                shader.fragmentShader = shader.fragmentShader.replace(
                    "#include <emissivemap_fragment>",
                    `
        #ifdef USE_EMISSIVEMAP

          vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

          // Methodology of showing night lights only:
          //
          // going through the shader calculations in the meshphysical shader chunks (mostly on the vertex side),
          // we can confirm that geometryNormal is the normalized normal in view space,
          // for the night side of the earth, the dot product between geometryNormal and the directional light would be negative
          // since the direction vector actually points from target to position of the DirectionalLight,
          // for lit side of the earth, the reverse happens thus emissiveColor would be multiplied with 0.
          // The smoothstep is to smoothen the change between night and day
          
          emissiveColor *= 1.0 - smoothstep(-0.02, 0.0, dot(geometryNormal, directionalLights[0].direction));
          
          totalEmissiveRadiance *= emissiveColor.rgb;

        #endif

        // Methodology explanation:
        //
        // Our goal here is to use a “negative light map” approach to cast cloud shadows,
        // the idea is on any uv point on earth map(Point X),
        // we find the corresponding uv point(Point Y) on clouds map that is directly above Point X,
        // then we extract color value at Point Y.
        // We then darken the color value at Point X depending on the color value at Point Y,
        // that is the intensity of the clouds at Point Y.
        //
        // Since the clouds are made to spin twice as fast as the earth,
        // in order to get the correct shadows(clouds) position in this earth's fragment shader
        // we need to minus earth's UV.x coordinate by uv_xOffset,
        // which is calculated and explained in the updateScene()
        // after minus by uv_xOffset, the result would be in the range of -1 to 1,
        // we need to set RepeatWrapping for wrapS of the clouds texture so that texture2D still works for -1 to 0

        float cloudsMapValue = texture2D(tClouds, vec2(vMapUv.x - uv_xOffset, vMapUv.y)).r;
        
        // The shadow should be more intense where the clouds are more intense,
        // thus we do 1.0 minus cloudsMapValue to obtain the shadowValue, which is multiplied to diffuseColor
        // we also clamp the shadowValue to a minimum of 0.2 so it doesn't get too dark
        
        diffuseColor.rgb *= max(1.0 - cloudsMapValue, 0.2 );

        // adding small amount of atmospheric coloring to make it more realistic
        // fine tune the first constant for stronger or weaker effect
        float intensity = 1.4 - dot( geometryNormal, vec3( 0.0, 0.0, 1.0 ) );
        vec3 atmosphere = vec3( 0.3, 0.6, 1.0 ) * pow(intensity, 5.0);
        diffuseColor.rgb += atmosphere;
      `
                );
                earthMat.userData.shader = shader;
            };
        },
    };

    runApp(app, scene, renderer, camera, true, undefined, undefined);
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search);

    const obj = {
        hasClouds: Boolean(Number(params.get("cloudsCount"))),
    };

    const planetTexture = params.get("planetTexture");
    if (planetTexture) {
        obj.planetTexture = planetTexture;
    }

    initPlanetScene(obj);
};
