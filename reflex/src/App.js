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
      <div class="container">
    <main>
      <article class="post">
        <p class="post-content"><Captioning/></p>
      </article>
      
    </main>
    
    <footer class="footer">
      <p>&copy; 2023 Decker Ayers</p>
    </footer>
  </div>
    </div>
  );
}

export default App;
