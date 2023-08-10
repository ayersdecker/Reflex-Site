import './App.css';
import Clock from './Clock';
import Captioning  from './Captioning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Reflex</h1>
        <Clock/>
      </header>
      <body>
        <Captioning/>
      </body>


    </div>
  );
}

export default App;
