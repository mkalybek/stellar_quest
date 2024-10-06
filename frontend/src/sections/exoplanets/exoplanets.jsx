import './exoplanets.scss';
import kelt9bImage from './../../assets/exoplanets/kelt-9b.webp';
import hd189733bImage from './../../assets/exoplanets/hd_189733_b.png';
import psrJ17191438bImage from './../../assets/exoplanets/gasgiant-7.jpg.webp';
import corot7bImage from './../../assets/exoplanets/corot7b.jpeg';
import kepler10cImage from './../../assets/exoplanets/kepler10c.avif';
import wasp17bImage from './../../assets/exoplanets/wasp-17b.jpg';
import Exoplanet from '../../components/exoplanet/exoplanet';

const Exoplanets = () => {
    return (
        <section id="exoplanets" className="section_exoplanets">
            <div className='section_exoplanets_title'>
                <div className='title'>EXOPLANETS</div>
            </div>
           <Exoplanet 
                name="Kelt-9b" 
                desc='This is the hottest known exoplanet, a hot Jupiter'
                image={kelt9bImage}
                textureLink="kelt-9b.png"
            />
            <Exoplanet 
                name="HD 189733b" 
                desc='Exoplanet 64 light-years away, known for its extreme winds with rain of hot glass'
                image={hd189733bImage}
                textureLink="hd.png"
            />
            <Exoplanet 
                name="PSR J1719-1438 b" 
                desc='Known for its extreme density and composition primarily of carbon and oxygen, resembling a diamond'
                image={psrJ17191438bImage}
                textureLink="psr.png"
            />
            <Exoplanet 
                name="Corot 7b" 
                desc='The remnant of a gas giant, a constantly raging lava ocean with snow made of stone'
                image={corot7bImage}
                textureLink="corot7b.png"
            />
            <Exoplanet 
                name="Kepler 10c" 
                desc='"The largest rocky exoplanet" or a planet that cannot exist.  It was she who gave birth to a new class of exoplanets called “Mega-Earths”'
                image={kepler10cImage}
                textureLink="kepler10c.png"
            />
            <Exoplanet 
                name="WASP 17b" 
                desc='Planet WASP 17B, a super-hot Saturn, has a density below foam'
                image={wasp17bImage}
                textureLink="wasp17b.png"
            />
        </section>
    );
};

export default Exoplanets;