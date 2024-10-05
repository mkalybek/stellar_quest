import './App.scss';
import Header from './components/header/header';
import Exomoons from './sections/exomoons/exomoons';
import History from './sections/history/history.jsx';
import Methods from './sections/methods of search/methods.jsx';
import Start from './sections/start/start.jsx';
import Types from './sections/types and classes/types.jsx';
import Exoplanets from './sections/exoplanets/exoplanets';
import Simulator from './sections/simulator/simulator';
import EarthType from './sections/earth type/earthType.jsx';
import Maps from './sections/maps/maps.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <History />
      <Methods />
      <Types />
      <EarthType />
      <Exoplanets />
      <Simulator />
      <Maps />
      <Exomoons />
    </div>
  );
}

export default App;
