import React, { useState } from 'react';
import axios from 'axios';
import '../Style/WeatherInput.css';
import Chart from '../Components/Chart'

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = async () => {
    const apiKey = "473ab9889dbe0b9cfce1f3d4257131a4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null); 
    } catch (err) {
      setError('City not found or an error occurred');
      setWeather(null);
    }
  };

  return (
    <div
    className="weather-container"
    >
  
  
      <h2>Ask weather condition here...</h2>
      <div className="input-container">
        <input 
          type="text" 
          value={city} 
          onChange={handleInputChange} 
          placeholder="Enter city name" 
          className="weather-input"
        />
        <button onClick={handleFetchWeather} className="weather-button">Get Weather</button>
      </div>
      
      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Condition: {weather.weather[0].description}</p>

          
          <Chart 
            temperature={weather.main.temp} 
            humidity={weather.main.humidity} 
            pressure={weather.main.pressure}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
