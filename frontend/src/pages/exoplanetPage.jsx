import { useParams } from 'react-router-dom';
import './page.scss';
import Header from '../components/header/header';

const ExoplanetPage = () => {
    const { planetName, textureLink } = useParams();
    return (
        <div className='page'>
            <Header />
            <h2 className='title exoplanetpage_title'>{planetName}</h2>
            <iframe className='frame' height="100%" width="100%" src={textureLink}></iframe>
        </div>
    );
};

export default ExoplanetPage;