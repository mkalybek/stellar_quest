import './exoplanet.scss';

const Exoplanet = ({ name, desc, image }) => {
    return (
        <div className="wrap">
            <div className="img_col">
                <div className="circle_container">
                    <img src={image} alt={name} className="img" />
                </div>
                <a href="/#" class="link_closer">
                    Take a closer look
                </a>
            </div>
            <div className="info">
                <h2 className="title">{name}</h2>
                <p className="text desc">{desc}</p>
                <button className="button_talk">Talk with 
                    <span> {name}</span>
                </button>
            </div>
        </div>
    );
};

export default Exoplanet;