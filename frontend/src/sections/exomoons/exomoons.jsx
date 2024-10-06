import "./exomoons.scss";
import Exo1 from "./../../assets/exoplanets/exomoons1.webp";
import Exo2 from "./../../assets/exoplanets/exomoons2.jpg";

const Exomoons = () => {
  return (
    <section id="exomoons" className="section">
      <div className="first-description">
        <div className="title exomoons-title">EXOMOONS</div>
        <div className="text exomoons-text">
          Of course, scientists would like to discover the satellites of
          exoplanets. Satellites are smaller than planets and therefore
          technically it is quite difficult to detect a satellite
          <br />
          <br />
          How can they be opened? Basically, the ways of discovering satellites
          are similar to the ways of discovering planets. Almost all the methods
          that are used for planets can be extended to satellites
          <br />
          <br />
          <br />
          One of the most interesting questions in this area at the moment is
          the potential habitability of satellites. Is there life on these
          planets? The Goldilocks Zone plays a key role in this issue
        </div>
      </div>

      <div className="goldilocks">
        <div className="goldilocks-description">
          <div className="title">GOLDILOCKS ZONE OR HABITABLE ZONE</div>
          <div className="text goldilocks-description-text">
            The Goldilocks zone is such a special region around a star where the
            average temperature of an exoplanet allows liquid water to exist. It
            depends on the distance to the star, the amount of energy produced
            and the atmosphere of the exoplanet.
          </div>
        </div>
        <div className="goldilocks-image">
          <div className="image-container">
            <img
              src={Exo1}
              alt="goldilocks"
              className="goldilocks-image-actual"
            />
            <img
              src={Exo2}
              alt="goldilocks"
              className="goldilocks-image-actual"
            />
          </div>
          <div className="text goldilocks-image-text">
            For example, Venus and Mars are located in the potentially habitable
            zone of the Solar System. If the atmospheres of these planets are
            improved, it will be quite possible to live on them.
          </div>
        </div>
      </div>
      <div className="examples">
        <div className="example">
          <img src={Exo1} alt="" className="goldilocks-image-actual" />
          <div className="text">
            TOI-700 d is the first discovered exoplanet of the Earth group,
            located in the habitable zone of its star. The TESS telescope was
            discovered by the transit method.
          </div>
        </div>
        <div className="example">
          <img src={Exo2} alt="" className="goldilocks-image-actual" />
          <div className="text">
            On February 22, 2017, NASA announced that it had discovered seven
            exoplanets near the ultra-cold dwarf star TRAPPIST-1, three of which
            are Earth-sized and located in the "habitable zone" with the
            possibility of liquid water.
          </div>
        </div>
      </div>
      <div className="text ending">
        After the Gaia space Telescope clarified data on the distance of up to
        130 million stars and their luminosity, out of 30 Earth-like and
        potentially habitable exoplanets found by the Kepler telescope, 12
        planets or 2 planets retained the status of Earth-like worlds in the
        habitable zone in 2018.
      </div>
      <div className="text ending end">
        This is an absolutely key step, because in the coming years it is
        probably the only way to move forward in understanding whether there is
        life on other planets.
      </div>
    </section>
  );
};

export default Exomoons;
