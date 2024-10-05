import './App.scss';
import Header from './components/header/header';
import Exomoons from './sections/exomoons/exomoons';
import History from './sections/history/history.jsx';
import Methods from './sections/methods of search/methods.jsx';
import Start from './sections/start/start.jsx';
import Types from './sections/types and classes/types.jsx';
import Exoplanets from './sections/exoplanets/exoplanets';
import Simulator from './sections/simulator/simulator';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SimulatorPage from './pages/simulatorPage.jsx';
import MainPage from './pages/mainPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/simulator/:planetType',
    element: <SimulatorPage />,
  }
]);

const App = () => {
  return (
    // <RouterProvider router={router}/>
    // <MainPage />
    <div>
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
}

export default App;
