import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = '3101f82226ed18424cb3d3077d5ffd37'; // Replace with your OpenWeatherMap API key
  const city = 'rochester'; // Replace with the name of the city you want to show weather for

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className="weather-widget">
      {weather ? (
        <>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
