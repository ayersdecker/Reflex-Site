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
        <h2 class="post-title">Post Title 1</h2>
        <p class="post-content">This is the content of the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, nisi in facilisis cursus, neque ex tincidunt arcu, eu vulputate libero justo id ex.</p>
      </article>
      
      <article class="post">
        <h2 class="post-title">Post Title 2</h2>
        <p class="post-content">This is the content of the second post. Phasellus fermentum, elit et consectetur vehicula, libero sapien vehicula felis, vel bibendum nulla purus sed orci.</p>
      </article>
      
      <!-- Add more posts as needed -->
      
    </main>
    
    <footer class="footer">
      <p>&copy; 2023 Your Blog. All rights reserved.</p>
    </footer>
  </div>
    </div>
  );
}

export default App;
