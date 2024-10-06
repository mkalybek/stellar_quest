import { useParams } from 'react-router-dom';
import './page.scss';
import Header from '../components/header/header';

const GeneratePage = () => {
    const { planetName, planetType, imageName, cloudsCount } = useParams();
    let planetTexture = 'https://mobile.codeunion.kz/stellar-quest/api/' + imageName;
    const frameLink = `https://mobile.codeunion.kz/stellar-quest/iframe/?planetTexture=${planetTexture}&cloudsCount=${cloudsCount}`;
    return (
        <div className='page page_generate'>
            <Header />
            <div className="titles">
                <h2 className='title generatepage_title'>Your planet name: <span>{planetName}</span></h2>
                <h2 className='title generatepage_title'>Your type of planet: <span>{planetType}</span></h2>
            </div>
            <div className='frame_container'>
                <iframe className='frame' title={planetName} src={frameLink}></iframe>
            </div>
        </div>
    );
};

export default GeneratePage;