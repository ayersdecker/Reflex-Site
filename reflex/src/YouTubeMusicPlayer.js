

import React, { useState } from 'react';

const YouTubeMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = 'https://www.youtube.com/watch?v=4xDzrJKXOOY'; // Replace with the URL of the YouTube audio

  const handlePlayPause = () => {
    const audioElement = document.getElementById('youtube-audio');

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="youtube-audio-player">
      <h2>YouTube Audio Player</h2>
      <audio id="youtube-audio" controls src={audioSrc}>
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default YouTubeMusicPlayer;