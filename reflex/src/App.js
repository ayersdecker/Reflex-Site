import './App.css';
import Clock from './Clock';
import Captioning  from './Captioning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item">
            <div className="github">Github</div>
          </div>
          <div className="grid-item">
            <div className="clock"><Clock/></div>
          </div>
          <div className="grid-item">
            <div className="caption">Captioning</div>
          </div>
          <div className="grid-item">
            <div className="lofi">Lofi</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
