import './App.scss';
import Header from './components/header/header';
import Exoplanets from './sections/exoplanets/exoplanets';
import Simulator from './sections/simulator/simulator';

function App() {
  return (
    <div className="App">
      <Header />
      <Exoplanets />
      <Simulator />
    </div>
  );
}

export default App;
