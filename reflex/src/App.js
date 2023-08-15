import './App.css';
import Clock from './Clock';
import Captioning  from './Captioning';
import LofiPlayer from './Music';
import GitHubProfile from './Github';
import WeatherWidget from './Weather';
import YouTubeMusicPlayer from './YouTubeMusicPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item">
            <div className='github'><WeatherWidget/></div>
          </div>
          <div className="grid-item">
            <div className='clock'><Clock/></div>
          </div>
          <div className="grid-item">
            <div className='caption'><Captioning/></div>
          </div>
          <div className="grid-item">
            <div className='lofi'><LofiPlayer/></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
