import "./history.scss";

const History = () => {
  return (
    <section id="history">
      <div className="title history-title">HISTORY</div>
      <label className="text">
        As soon as people began to guess that the stars were distant Suns, a
        natural idea appeared, since planets revolve around the Sun, it means
        that planets must exist around other stars. Now these are the planets we
        call exoplanets
      </label>
      <div className="text year-1990">
        <div className="year">1992</div>
        <div className="year-description">
          Alexander Volzhan, an American astronomer, discovered an exoplanet
          around a neutron star, pulsar psr1257+12. Planets around neutron stars
          most likely formed after a supernova explosion. During the explosion,
          a lot of matter is ejected, and from this substance it is possible to
          form a new generation of planets, including small planets like Earth.
          These are the planets that are mostly discovered by pulsars.
        </div>
      </div>
      <div className="text year-1990">
        <div className="year">1995</div>
        <div className="year-description">
          The first exoplanet 51 Pegasi b orbits the star 51 in something
          similar to the Sun in the constellation Pegasus. It was a planet whose
          likeness does not exist in the Solar System. This is an object that
          belongs to the class of so-called hot Jupiters (a gas giant that is
          very close to the star). <br />
          This is amazing, not only because it doesn't exist in the Solar
          System, but because no one expected it. It is simply impossible to
          create a heavy gas planet close to a star. When planets form from a
          disk around a star, then near the star, firstly, there is simply
          little mass, and secondly, this mass is not in a gaseous state.
          Starlight and a stream of particles sweep gas out of areas close to
          the Sun.
        </div>
      </div>
      <div className="text extra-text">
        The first exoplanets were discovered thanks to ground-based
        observations. Then they began to launch orbital telescopes, which helped
        to discover new worlds. But the real breakthrough in this area was the
        launch of the Kepler spacecraft. For more than 9 years, since 2009, this
        telescope has discovered more than 2,000 exoplanets and as many more,
        even more, candidates who are waiting for confirmation.
      </div>
    </section>
  );
};

export default History;
