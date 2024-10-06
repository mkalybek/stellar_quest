import "./types.scss";
import Simulator from "./../../components/mainClasses/mainClasses.jsx";
import Earth from "./../../assets/exoplanets/exoplanet-earthType.jpg";
import GasG from "./../../assets/exoplanets/exoplanet-gasGiants.webp";
import ColdP from "./../../assets/exoplanets/exoplanet-coldPlanet.jpg";
import Main1 from "./../../assets/exoplanets/mainType1.jpeg";
import Main2 from "./../../assets/exoplanets/mainType2.webp";

const Types = () => {
  return (
    <section id="types">
      <div className="main-description">
        <div className="title main-description-title">TYPES</div>
        <div className="text main-description-text">
          Giordano Bruno believed that planets should exist around other stars.
          And so, hundreds of years later, exoplanets began to be discovered.
          What is such a significant discovery? By discovering exoplanets,
          scientists have seen the structure of planets, which is physically
          impossible to form in our solar system.
          <br />
          <br />
          <br />
          <br />
          <br />
          What do we measure by studying exoplanets and how do we classify them?
          How can we find out the composition of the planet? usually we have
          only two values - the mass and radius of the planet. So we can
          determine the average density. But then the situation is simplified by
          the fact that we roughly know what planets can consist of, since we
          roughly know the composition of matter in the galaxy.
        </div>
      </div>
      <div className="main-types">
        <div className="title main-types-title">
          TWO MAIN TYPES DEPENDING ON MASS
        </div>
        <div className="main-type">
          <img
            src={Main1}
            alt="Earth type exoplanet"
            className="main-type-image"
          />
          <div className="main-type-title">EARTH TYPE PLANET</div>
          <div className="text main-type-description">
            The mass is less than 7 Earth masses. They consist mainly of
            silicates and iron. The average density is 3.5-6 g/cubic cm. The
            radius is less than 2 radii of the Earth.
          </div>
        </div>
        <div className="main-type">
          <img
            src={Main2}
            alt="Giant type exoplanet"
            className="main-type-image"
          />
          <div className="main-type-title">GIANT PLANETS</div>
          <div className="text main-type-description">
            The mass is in the range from 0.19 to 60 Jupiter masses. They
            consist mainly of hydrogen and helium. They rotate quickly. Due to
            the enormous pressure in the bowels of the planet, hydrogen passes
            into the metallic phase. They have a strong magnetic field, which
            increases with the increase in the mass of the planet.
          </div>
        </div>
      </div>
      <div className="main-classes">
        <Simulator
          title="EARTH TYPE PLANETS"
          image={Earth}
          list={[
            "Super Earth",
            "Mega Earth",
            "Mini Earth",
            "Ocean planet",
            "The iron planet",
            "Carbon planet",
            "Lava planet",
          ]}
          altWord="Earth type exoplanet"
        />
        <Simulator
          title="GAS GIANT PLANETS"
          image={GasG}
          list={[
            "Cold Jupiter",
            "Hot Jupiter",
            "Hot Saturn",
            "Hot Neptune",
            "Water giant",
          ]}
          altWord={"Gas Giant type exoplanet"}
        ></Simulator>
      </div>
      <div className="main-classes">
        <Simulator
          title="ICE GIANTS OR COLD NEPTUNES"
          image={ColdP}
          list={[]}
          altWord={"Ice giants / cold Neptunes"}
        ></Simulator>
      </div>
    </section>
  );
};

export default Types;
