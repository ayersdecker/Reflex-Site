import React, { useRef, useState } from 'react';

const YouTubeMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const videoId = '4xDzrJKXOOY';

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onPlayerReady = event => {
    // You can perform additional actions when the player is ready
  };

  return (
    <div className="youtube-music-player">
      <h2>YouTube Music Player</h2>
      <div id="youtube-player"></div>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>

      <script>
        const onYouTubeIframeAPIReady = () => {
          playerRef.current = new YT.Player('youtube-player', {
            height: '360',
            width: '640',
            videoId: videoId,
            events: {
              onReady: onPlayerReady,
            },
          });
        };
      </script>
    </div>
  );
};

export default YouTubeMusicPlayer;
