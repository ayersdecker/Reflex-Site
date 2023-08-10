import './App.css';
import Clock from './Clock';
import Captioning  from './Captioning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Captioning/>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
