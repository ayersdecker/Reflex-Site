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
    <header class="header">
      <h1>Scroller Blog</h1>
    </header>
    
    <main>
      <article class="post">
        <h2 class="Time Module">Post Title 1</h2>
        <p class="post-content"><Captioning/></p>
      </article>
      
      <article class="post">
        <h2 class="post-title"><Clock/></h2>
        <p class="post-content"></p>
      </article>
      
      
    </main>
    
    <footer class="footer">
      <p>&copy; 2023 Your Blog. All rights reserved.</p>
    </footer>
  </div>
    </div>
  );
}

export default App;
