import React, { useState, useEffect } from 'react';

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

export default Clock;