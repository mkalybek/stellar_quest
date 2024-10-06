import './exoplanet.scss';
import ChatBox from '../chat/chatBox';
import { useState } from 'react';

const Exoplanet = ({ name, desc, image }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
        console.log(isChatOpen);
    };
    return (
        <div className="wrap">
            {isChatOpen && <ChatBox planet={name} onClose={toggleChat} />}
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
                <button className="button_talk" onClick={toggleChat}>Talk with 
                    <span> {name}</span>
                </button>
            </div>
        </div>
    );
};

export default Exoplanet;