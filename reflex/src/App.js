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
        <p class="post-content"><pr><code>import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
      <h1 className="time">{formattedTime}</h1>

  );
}

export default Clock;</code></pr></p>
      </article>
      
      <article class="post">
        <h2 class="post-title">Post Title 2</h2>
        <p class="post-content">This is the content of the second post. Phasellus fermentum, elit et consectetur vehicula, libero sapien vehicula felis, vel bibendum nulla purus sed orci.</p>
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
