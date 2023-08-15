import React from 'react';

const LofiPlayer = () => {
  const lofi = '4xDzrJKXOOY';

  return (
    <div className="lofi">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${lofi}`}
        title=""
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LofiPlayer;
