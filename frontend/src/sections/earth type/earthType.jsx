import './earthType.scss'
import SuperEarth from './../../assets/exoplanets/exoplanet-superEarth.webp';
import MegaEarth from './../../assets/exoplanets/exoplanet-megaEarth.avif';
import OceanPlanet from './../../assets/exoplanets/exoplanet-oceanPlanet.webp';
import MiniEarth from './../../assets/exoplanets/exoplanet-miniEarth.jpg';

const EarthType = () => {
    return (
        <section id='earth-type'>
            <div className="title earth-type-title">EARTH TYPES</div>
            <div className='earth-type-grid'>
                <div className="earth-type-card">
                    <div className='earth-type-card-image-box'>
                        <img src={SuperEarth} alt="Super Earth" className='earth-type-card-image'/>
                    </div>  
                    <div className='earth-type-card-container'>
                        <div className="earth-type-card-title">СУПЕРЗЕМЛЯ</div>
                        <div className="earth-type-card-description">
                            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
                            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
                            меньше 2 радиусов Земли.
                        </div>
                    </div>
                    
                </div>
                <div className="earth-type-card">
                    <div className='earth-type-card-image-box'>
                        <img src={MegaEarth} alt="" className='earth-type-card-image'/>
                    </div>
                    <div className='earth-type-card-container'>
                        <div className="earth-type-card-title">МЕГАЗЕМЛЯ</div>
                        <div className="earth-type-card-description">
                            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
                            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
                            меньше 2 радиусов Земли.
                        </div>
                    </div>
                    
                </div>
                <div className="earth-type-card">
                    <div className='earth-type-card-image-box'>
                        <img src={MiniEarth} alt="" className='earth-type-card-image'/>
                    </div>
                    <div className='earth-type-card-container'>
                        <div className="earth-type-card-title">МИНИ ЗЕМЛЯ</div>
                        <div className="earth-type-card-description">
                            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
                            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
                            меньше 2 радиусов Земли.
                        </div>
                    </div>
                    
                </div>
                <div className="earth-type-card">
                    <div className='earth-type-card-image-box'>
                        <img src={OceanPlanet} alt="" className='earth-type-card-image'/>
                    </div>
                    <div className='earth-type-card-container'>
                        <div className="earth-type-card-title">ПЛАНЕТА ОКЕАН</div>
                        <div className="earth-type-card-description">
                            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
                            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
                            меньше 2 радиусов Земли.
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default EarthType;