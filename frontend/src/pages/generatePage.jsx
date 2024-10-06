import { useParams } from 'react-router-dom';
import './page.scss';
import Header from '../components/header/header';

const GeneratePage = () => {
    const { planetName, planetType } = useParams();
    return (
        <div className='page'>
            <Header />
            <h2 className='title generatepage_title'>Your planet name: {planetName}</h2>
            <h2 className='title generatepage_title'>Your type of planet: {planetType}</h2>
            <iframe className='frame' height="100%" width="100%" src={""}></iframe>
        </div>
    );
};

export default GeneratePage;