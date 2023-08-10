import React, { useState, useEffect } from 'react';
import annyang from 'annyang';

function Captioning() {
  const [caption, setCaption] = useState('');

  useEffect(() => {
    if (annyang) {
      annyang.addCallback('result', (userSaid) => {
        setCaption(userSaid[0]); // Display only the latest spoken phrase
      });

      annyang.start();
    }

    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, []);

  return (
      <div className="caption">
        <h1>{caption}</h1>
      </div>
  );
}

export default Captioning;
