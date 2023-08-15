import React from 'react';

const LofiPlayer = () => {
  const playlistId = 'PL9tJU9kSO9WFrXxT_V6GokuW54OtkbFOO';

  return (
    <div className="lofi">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        title="YouTube Music Playlist Player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LofiPlayer;
