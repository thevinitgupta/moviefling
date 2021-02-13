import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './Main';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="app__head">
        <span className="app__name">movie fling</span>
        <div className="acknowledgement"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="tmdb
        _logo"></img> </div>
      </div>
      <Main />
    </div>
    </Router>
  );
}

export default App;
