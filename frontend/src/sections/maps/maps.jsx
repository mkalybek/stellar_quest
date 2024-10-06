import "./maps.scss";
import MapsImage from "./../../assets/exoplanets/exoplanets-maps.webp";

const Maps = () => {
  return (
    <section id="maps">
      <div className="title maps-title">MAPS OF EXOPLANETS</div>
      <div className="text maps-text">
        The Spitzer satellite managed to register infrared radiation from
        exoplanets. Due to the fact that we do not just see the planet in front
        of the star, then behind the star, We see the process of how the planet
        goes behind the star, and during this process we get a measurement. The
        star scans the planet, as it were, and we can get a temperature
        distribution over the surface. Such measurements help to learn more
        about the structure of these objects and refine the models. Finally, in
        a very unique case, it was possible, as they say, to build a map of an
        exoplanet. This observation probably illustrates the limit of modern
        technical capabilities.
      </div>
      <div className="maps-image-box">
        <img src={MapsImage} alt="maps" className="maps-image" />
      </div>
    </section>
  );
};

export default Maps;
