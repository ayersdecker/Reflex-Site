import './App.css';
import Clock from './Clock';
import Captioning  from './Captioning';
import LofiPlayer from './Music';
import GitHubProfile from './Github';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item">
            <div className='github'><GitHubProfile/></div>
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
