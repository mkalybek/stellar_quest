export function createRenderer(options, onLoad) {
    const canvas = document.getElementById("webgl-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: options.antialias,
    });
    if (onLoad) onLoad(renderer);
    return renderer;
}
