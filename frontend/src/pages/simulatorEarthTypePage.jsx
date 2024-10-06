import Header from '../components/header/header';
import './page.scss';
import { useState } from "react";

const logScale = (min, max, value) => {
    const logMin = Math.log10(min);
    const logMax = Math.log10(max);
    const scale = logMin + (logMax - logMin) * value;
    return Math.pow(10, scale);
};

const SimulatorEarthTypePage = () => {
    const [mass, setMass] = useState(0.02);               // Jupiter masses
    const [temperature, setTemperature] = useState(500);  // Kelvin
    const [distance, setDistance] = useState(0.05);        // AU
    const [silicates, setSilicates] = useState(70);       // Percent
    const [iron, setIron] = useState(25);           // Percent
    const [sulfur, setSulfur] = useState(5);              // Percent
    const [co2, setCO2] = useState(5);              // Percent
    const [carbon, setCarbon] = useState(5);              // Percent
    const [ice, setIce] = useState(5);              // Percent

    const handleMassChange = (event) => {
        const value = event.target.value / 100; // Normalizing to [0, 1]
        const newMass = logScale(0.2, 30, value);
        setMass(Math.round(newMass * 100) / 100);  // Rounding to 2 decimal places
    };

    const handleDistanceChange = (event) => {
        const value = event.target.value / 100; // Normalizing to [0, 1]
        const newDistance = logScale(0.02, 1, value);
        setDistance(Math.round(newDistance * 100) / 100);  // Rounding to 2 decimal places
    };

    const handleGenerate = () => {
        alert(`Generating a planet with Mass: ${mass} Jupiter masses and Distance: ${distance} AU`);
    };

    let planetType = "Earth Type Planet";

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
                    <label htmlFor="mass">Mass, Earth masses: {mass}</label>
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
                        min="200"
                        max="6000"
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
                    <label htmlFor="silicates">Silicates, %</label>
                    <input
                    type="number"
                    id="silicates"
                    name="silicates"
                    min="0"
                    max="100"
                    value={silicates}
                    onChange={(e) => setSilicates(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="iron">Iron, %</label>
                    <input
                    type="number"
                    id="iron"
                    name="iron"
                    min="0"
                    max="100"
                    value={iron}
                    onChange={(e) => setIron(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sulfur">Sulfur, %</label>
                    <input
                    type="number"
                    id="sulfur"
                    name="sulfur"
                    min="0"
                    max="100"
                    value={sulfur}
                    onChange={(e) => setSulfur(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="co2">CO2, %</label>
                    <input
                    type="number"
                    id="co2"
                    name="co2"
                    min="0"
                    max="100"
                    value={co2}
                    onChange={(e) => setCO2(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="carbon">Carbon, %</label>
                    <input
                    type="number"
                    id="carbon"
                    name="carbon"
                    min="0"
                    max="100"
                    value={carbon}
                    onChange={(e) => setCarbon(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ice">Ice, %</label>
                    <input
                    type="number"
                    id="ice"
                    name="ice"
                    min="0"
                    max="100"
                    value={ice}
                    onChange={(e) => setIce(e.target.value)}
                    />
                </div>

                <button className="generate-btn" onClick={handleGenerate}>Generate</button>
            </form>
        </div>
    );
};

export default SimulatorEarthTypePage;
