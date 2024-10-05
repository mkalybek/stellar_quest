import './page.scss';

import Header from './../components/header/header';
import Exomoons from './../sections/exomoons/exomoons';
import History from './../sections/history/history.jsx';
import Methods from './../sections/methods of search/methods.jsx';
import Start from './../sections/start/start.jsx';
import Types from './../sections/types and classes/types.jsx';
import Exoplanets from './../sections/exoplanets/exoplanets';
import Simulator from './../sections/simulator/simulator';

const MainPage = () => {
    return (
        <div className='page'>
            <div class='stars'></div>
            <div class='twinkling'></div>
            <div class='clouds'></div>
            <Header />
            <Start />
            <History />
            <Methods />
            <Types />
            <Exoplanets />
            <Simulator />
            <Exomoons />
        </div>
    );
};

export default MainPage;