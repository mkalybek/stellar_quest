import "./earthType.scss";
import SuperEarth from "./../../assets/exoplanets/exoplanet-superEarth.webp";
import MegaEarth from "./../../assets/exoplanets/exoplanet-megaEarth.avif";
import OceanPlanet from "./../../assets/exoplanets/exoplanet-oceanPlanet.webp";
import MiniEarth from "./../../assets/exoplanets/exoplanet-miniEarth.jpg";
import CarbonPlanet from "./../../assets/exoplanets/exoplanet-carbonPlanet.webp";
import IronPlanet from "./../../assets/exoplanets/exoplanet-ironPlanet.jpg";
import LavaPlanet from "./../../assets/exoplanets/exoplanet-lavaPlanet.jpg";
import ColdJupiter from "./../../assets/exoplanets/exoplanet-coldJupiter.jpg";
import HotJupiter from "./../../assets/exoplanets/exoplanet-hotJupiter.jpg";
import HotSaturn from "./../../assets/exoplanets/exoplanet-hotSaturn.webp";
import HotNeptune from "./../../assets/exoplanets/exoplanet-hotNeptune.jpg";
import WaterGiant from "./../../assets/exoplanets/exoplanet-waterGiant.webp";

const EarthType = () => {
  return (
    <section id="earth-type">
      <div className="title earth-type-title">EARTH TYPES</div>
      <div className="earth-type-grid">
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={SuperEarth}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">SUPER EARTH</div>
            <div className="earth-type-card-description">
              A rocky planet larger than Earth but smaller than Neptune,
              typically between 1.5 and 10 Earth masses. Super Earths may have
              thicker atmospheres and stronger gravity than Earth, with varied
              compositions ranging from rocky to water-rich.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={MegaEarth} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">MEGA EARTH</div>
            <div className="earth-type-card-description">
              A massive terrestrial planet significantly larger than a Super
              Earth, usually more than 10 Earth masses. Despite their size, Mega
              Earths are dense and primarily made of rock and metals, rather
              than gas like gas giants.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={MiniEarth} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">MINI EARTH</div>
            <div className="earth-type-card-description">
              Smaller, rocky planets with sizes and masses less than Earth's,
              often with similar surface characteristics like mountains and
              oceans, but with lower gravity and thinner atmospheres.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={OceanPlanet} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">OCEAN PLANET</div>
            <div className="earth-type-card-description">
              A planet completely or largely covered by a deep global ocean,
              possibly without any landmasses. These planets may have thick
              atmospheres that trap water vapor, and their oceans could be
              hundreds of kilometers deep.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={CarbonPlanet} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">CARBON PLANET</div>
            <div className="earth-type-card-description">
              A theoretical type of planet with a high concentration of carbon
              rather than oxygen, resulting in a surface potentially covered in
              carbon compounds like graphite or diamond, with little or no
              water.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={IronPlanet} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">THE IRON PLANET</div>
            <div className="earth-type-card-description">
              A dense, metal-rich planet composed mostly of iron and other heavy
              elements, similar to Mercury in our solar system. These planets
              have thin or no atmospheres due to the lack of lighter materials
              like water or silicon.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img src={LavaPlanet} alt="" className="earth-type-card-image" />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">LAVA PLANET</div>
            <div className="earth-type-card-description">
              A planet with an extremely hot surface covered by molten lava,
              typically due to its close proximity to its parent star, causing
              intense heat and volcanic activity.
            </div>
          </div>
        </div>
      </div>
      <div className="title earth-type-title">GAS GIANTS</div>
      <div className="earth-type-grid">
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={ColdJupiter}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">COLD JUPITER</div>
            <div className="earth-type-card-description">
              A gas giant similar in size to Jupiter but located far from its
              parent star, making it very cold with thick atmospheres of
              hydrogen and helium, potentially with icy moons.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={HotJupiter}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">HOT JUPITER</div>
            <div className="earth-type-card-description">
              A gas giant like Jupiter that orbits extremely close to its star,
              resulting in high temperatures and inflated atmospheres. These
              planets often have short orbital periods, sometimes less than a
              few days.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={HotSaturn}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">HOT SATURN</div>
            <div className="earth-type-card-description">
              A gas giant similar to Saturn, but with a closer orbit to its
              star, leading to high temperatures and expanded atmospheres,
              though less massive than Hot Jupiters.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={HotNeptune}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">HOT NEPTUNE</div>
            <div className="earth-type-card-description">
              A Neptune-sized planet that orbits very close to its star,
              resulting in a high surface temperature and atmospheric
              evaporation. These planets are gas-rich, but much smaller than Hot
              Jupiters.
            </div>
          </div>
        </div>
        <div className="earth-type-card">
          <div className="earth-type-card-image-box">
            <img
              src={WaterGiant}
              alt="Super Earth"
              className="earth-type-card-image"
            />
          </div>
          <div className="earth-type-card-container">
            <div className="earth-type-card-title">WATER GIANT</div>
            <div className="earth-type-card-description">
              A large planet primarily composed of water or water ice, with a
              thick atmosphere of hydrogen and helium. These planets are
              hypothesized to exist in the cooler parts of planetary systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthType;
