import "./methods.scss";
import "./method-descrs.scss";
import image1 from "./../../assets/exoplanets/methods-image1.webp";
import image2 from "./../../assets/exoplanets/exosky.webp";
import Dopler from "./../../assets/ways_to_find_a_planet/radial_velocity.mp4";
import Transit from "./../../assets/ways_to_find_a_planet/transit_method_double_planet.mp4";
import Grav from "./../../assets/ways_to_find_a_planet/gravitational_microlensing.mp4";
import DirI from "./../../assets/ways_to_find_a_planet/direct-imaging.mp4";
import Movem from "./../../assets/ways_to_find_a_planet/astometry.mp4";

const Methods = () => {
  return (
    <section id="methods">
      <div className="title methods-title">
        METHODS OF <br /> SEARCH
      </div>
      <div className="methods-content">
        <div className="methods-images">
          <img src={image1} alt="Kepler-186f" className="methods-image" />
          <img src={image2} alt="Space" className="methods-image" />
        </div>
        <div className="text methods-text">
          People have long been thinking about how to discover planets from
          other stars. This is difficult to do due to the fact that the planet
          itself is small, shines very poorly and shines only with reflected
          light. It's hard to notice her. It is even more difficult to notice it
          because it is located next to a very bright star. It often happens
          that we could see the exoplanet itself if it were in an empty place
          with exactly the same brilliance. But the bright light of a very close
          star prevents us from doing this.
          <br />
          <br />
          <br />
          <br />
          Surprisingly, in those very 80s and 90s, several methods
          simultaneously made it possible to discover exoplanets.
        </div>
      </div>
      <div className="title methods-list">
        <ul>
          <li>
            <a href="/stellar-quest/#dopler">DOPLER'S EFFECT</a>
          </li>
          <li>
            <a href="/stellar-quest/#transit">TRANSIT</a>
          </li>
          <li>
            <a href="/stellar-quest/#microlensing">GRAVITATIONAL MICROLENSING</a>
          </li>
          <li>
            <a href="/stellar-quest/#direct-imaging">DIRECT IMAGING</a>
          </li>
          <li>
            <a href="/stellar-quest/#minuscule">MINUSCULE MOVEMENTS</a>
          </li>
        </ul>
      </div>
      <div id="dopler" className="method-description">
        <div className="left-side">
          <video
            className="method-description-image"
            autoplay="on"
            loop
            muted
            preload="auto"
          >
            <source src={Dopler} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title right-side-title">DOPLER'S EFFECT</div>
          <div className="text">
            We often don't think about the fact that the Earth attracts us, but
            we attract the Earth with exactly the same force. So, in the same
            way, the planet, rotating around the star, makes the star move a
            little. And it can be noticed. <br />
            What did you want to observe? We get the spectrum of a star with
            very high accuracy. If the star is moving towards us, then all the
            lines shift to the blue region of the spectrum, if away from us,
            then to the red. If we looked at the Solar System from a distance,
            we would see that with the period of Jupiter's revolution, the Sun
            is now approaching a distant observer, then moving away. And by the
            strict periodicity of the process, we would be able to guess that
            this is really some kind of invisible satellite, and not, for
            example, the pulsation of the Sun. It was necessary to learn how to
            measure these speeds very accurately and, moreover, to do it for a
            long time. In '95, the first exoplanet was discovered in this way.
          </div>
        </div>
      </div>
      <div id="transit" className="method-description">
        <div className="left-side">
          <video
            className="method-description-image"
            autoplay="on"
            loop
            muted
            preload="auto"
          >
            <source src={Transit} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">TRANSIT</div>
          <div className="text">
            Let's imagine that at some point the planet passes exactly between
            us and the star. In much the same way as when observing the Sun, we
            see Venus or Mercury pass through the Sun's disk once in a fairly
            long time. What will happen in this case? We don't see the planet,
            we don't see any dark spot on the star, but we see that the
            brightness of the star has decreased slightly. The disk of the star
            is bright, and the planet is dark. Let's imagine that we observe a
            star and accurately measure its brightness. We do not see the disk
            of the star, we do not see any details, but by measuring the
            brightness with high accuracy, we see that suddenly the brightness
            drops a little. Indeed, a little bit, it can be one ten thousandth
            or several ten thousandths. If this happens periodically, then the
            only reasonable reason is the passage of a planet through the disk
            of a star. Such planets are called transit planets. The only
            difficulty is that, again, it takes a long time and very accurately
            to measure the brightness, and the atmosphere begins to interfere
            with us on Earth. Therefore, such observations are usually carried
            out from space. It is in this way that the Kepler satellite has
            already discovered almost a thousand exoplanets reliably enough
          </div>
        </div>
      </div>
      <div id="microlensing" className="method-description">
        <div className="left-side">
          <video
            className="method-description-image"
            autoplay="on"
            loop
            muted
            preload="auto"
          >
            <source src={Grav} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">GRAVITATIONAL MICROLENSING</div>
          <div className="text">
            Heavy bodies distort the space around them, black holes are
            especially vividly depicted, they are drawn in the form of a pit on
            a plane on which a rectangular grid is drawn. The light, moving
            through such a space, will feel this pit and will deviate. Thus, any
            heavy body effectively works as a collecting lens. gravitational
            lenses, capable of significantly distorting the image of a
            background object, represent sufficiently large concentrations of
            mass: galaxies and clusters of galaxies. Usually, you can only
            notice a short-term increase in the brightness of the lens object at
            the moment when the lens passes between the Ground and the
            background object. Events of this type are called microlensing. If
            the light source, the massive leasing object and the observer are
            located on the same straight line, the light source will be visible
            as a ring around the massive object.
          </div>
        </div>
      </div>
      <div id="direct-imaging" className="method-description">
        <div className="left-side">
          <video
            className="method-description-image"
            autoplay="on"
            loop
            muted
            preload="auto"
          >
            <source src={DirI} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">DIRECT IMAGING</div>
          <div className="text">
            Direct imaging, also called high contrast imaging (HCI), is the only
            method capable of capturing photons emitted directly by planetary
            bodies. This innovative method is especially useful for studying
            nascent planetary systems, where planets glow brightly and emit
            significant amounts of heat in the initial stages of their
            development.
          </div>
        </div>
      </div>
      <div id="minuscule" className="method-description">
        <div className="left-side">
          <video
            className="method-description-image"
            autoplay="on"
            loop
            muted
            preload="auto"
          >
            <source src={Movem} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">MINUSCULE MOVEMENTS</div>
          <div className="text">
            This method is associated with the observation of some periodic
            processes. <br/> 
            If there is some kind of periodic process in a star
            system, for example, there is a double star, two stars revolve
            around each other, and an eclipse occurs, the brightness changes
            periodically. This should be a very strictly periodic process. We
            observe and see that failures sometimes occur. How can this be
            explained? Some kind of extra body in the system. You can simulate
            this system and determine the mass of this extra interfering body.
            If it turns out to be planetary, then you have discovered a planet.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
