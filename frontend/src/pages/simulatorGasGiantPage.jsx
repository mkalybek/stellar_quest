import Header from '../components/header/header';
import './page.scss';
import { useState } from "react";

const logScale = (min, max, value) => {
    const logMin = Math.log10(min);
    const logMax = Math.log10(max);
    const scale = logMin + (logMax - logMin) * value;
    return Math.pow(10, scale);
};

const SimulatorGasGiantPage = () => {
    const [mass, setMass] = useState(0.02);               // Jupiter masses
    const [temperature, setTemperature] = useState(500);  // Kelvin
    const [distance, setDistance] = useState(0.05);        // AU
    const [hydrogen, setHydrogen] = useState(70);       // Percent
    const [helium, setHelium] = useState(25);           // Percent
    const [water, setWater] = useState(5);              // Percent

    const handleMassChange = (event) => {
        const value = event.target.value / 100; // Normalizing to [0, 1]
        const newMass = logScale(0.02, 80, value);
        setMass(Math.round(newMass * 100) / 100);  // Rounding to 2 decimal places
    };

    const handleDistanceChange = (event) => {
        const value = event.target.value / 100; // Normalizing to [0, 1]
        const newDistance = logScale(0.05, 10, value);
        setDistance(Math.round(newDistance * 100) / 100);  // Rounding to 2 decimal places
    };

    const handleGenerate = () => {
        alert(`Generating a planet with Mass: ${mass} Jupiter masses and Distance: ${distance} AU`);
    };

    let planetType = "Gas Giant Planet";

    return (
        <div className="page page_simulator">
            <div class='stars'></div>
            <div class='twinkling'></div>
            <div class='clouds'></div>
            <Header />
            <section className="wrap">
                <h2 className="title">{planetType}</h2>
            </section>

            <form className="planet-form">
                <div className="form-group">
                    <label htmlFor="mass">Mass, Jupiter masses: {mass}</label>
                    <input
                        type="range"
                        id="mass"
                        name="mass"
                        min="0"
                        max="100"
                        step="1"
                        onChange={handleMassChange}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="temperature">Temperature, K: {temperature}</label>
                    <input
                        type="range"
                        id="temperature"
                        name="temperature"
                        min="100"
                        max="3000"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="distance">Distance to the star, AU: {distance}</label>
                    <input
                        type="range"
                        id="distance"
                        name="distance"
                        min="0"
                        max="100"
                        step="1"
                        onChange={handleDistanceChange}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="hydrogen">Hydrogen, %</label>
                    <input
                        type="number"
                        id="hydrogen"
                        name="hydrogen"
                        min="0"
                        max="100"
                        value={hydrogen}
                        onChange={(e) => setHydrogen(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="helium">Helium, %</label>
                    <input
                        type="number"
                        id="helium"
                        name="helium"
                        min="0"
                        max="100"
                        value={helium}
                        onChange={(e) => setHelium(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="water">Water, %</label>
                    <input
                        type="number"
                        id="water"
                        name="water"
                        min="0"
                        max="100"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                    />
                </div>

                <button className="generate-btn" onClick={handleGenerate}>Generate</button>
            </form>
        </div>
    );
};

export default SimulatorGasGiantPage;
