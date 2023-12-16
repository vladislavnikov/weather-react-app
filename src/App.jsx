import React, { useState, useEffect } from 'react';
import './App.css';

const api = {
  key: "a829b3fc7620a6e8a58d3691c66e51ef"
};

function App() {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    btnClicked(); 
  }, []);

  const btnClicked = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api.key}&units=metric`)
      .then(response => response.json())
      .then(json => setWeather(json))};

      return (
        <div className="App">
          <h1>Weather App</h1>
          <div>
            <input
            className="input-location"
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={btnClicked}>Search</button>
          </div>
          
          {typeof weather.main !== "undefined" ? (
            <div>
              <p>{weather.name}</p>
              <p>{Math.floor(weather.main.temp)}°C</p>
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (<span>"No existing town!"</span>)}
      </div>
      );
}

export default App;
