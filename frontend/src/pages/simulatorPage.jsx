import { useParams } from 'react-router-dom';

const SimulatorPage = () => {
    const { params } = useParams();
    return (
        <div>Hello {params.planetType}</div>
    );
}

export default SimulatorPage;