
import React, { useState } from 'react';

const LofiPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    setIsPlaying(true);
  };

  return (
    <div className="lofi">
      {!isPlaying ? (
        <button onClick={startPlayback}>Start Lofi Music</button>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/4xDzrJKXOOY"
          title=""
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LofiPlayer;
