import "./simulator.scss";

const Simulator = () => {
    return (
        <section id="simulator">
            <h2 className="title">SIMULATOR</h2>
            <p className="text">Which type of planet do you want to create?</p>
            <div className="choices title">
                <a href="/stellar-quest/simulator/gasgiant">GAS GIANT PLANET</a>
                <a href="/stellar-quest/simulator/earthtype">
                    EARTH TYPE PLANET
                </a>
            </div>
        </section>
    );
};

export default Simulator;
