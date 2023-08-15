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
            <GitHubProfile/>
          </div>
          <div className="grid-item">
            <Clock/>
          </div>
          <div className="grid-item">
            <Captioning/>
          </div>
          <div className="grid-item">
            <LofiPlayer/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
