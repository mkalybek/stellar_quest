import { useParams } from 'react-router-dom';
import './page.scss';
import Header from '../components/header/header';

const ExoplanetPage = () => {
    const { planetName, textureImage } = useParams();
    let textureLink = `https://mobile.codeunion.kz/stellar-quest/api/planets/static/${textureImage}`;
    let frameLink = `https://mobile.codeunion.kz/stellar-quest/iframe/?planetTexture=${textureLink}&cloudsCount=1`;
    return (
        <div className='page page_generate'>
            <Header />
            <h2 className='title exoplanetpage_title'>{planetName}</h2>
            <div className='frame_container'>
                <iframe className='frame' title={planetName} src={frameLink}></iframe>
            </div>
        </div>
    );
};

export default ExoplanetPage;