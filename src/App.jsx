import React, { useState, useEffect } from 'react';
import GetCity from './common/city';
import '../public/styles/App.css';
import Search from './assets/search.png';

const api = {
  key: "a829b3fc7620a6e8a58d3691c66e51ef"
};

const city = await GetCity();

function App() {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState(city);

  useEffect(() => {
    btnClicked(); 
  }, []);

  const btnClicked = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api.key}&units=metric`)
      .then(response => response.json())
      .then(json => setWeather(json))

      document.getElementById('location').value = '';
    };

      return (
        <div className="App">
          <h1>Weather App</h1>
          <div class="search-wrapper">
           
              <input
              id='location'
                type="text"
                placeholder="Enter city/town..."
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="btn-search" onClick={btnClicked}>S</button>
           
          </div>
          
          {typeof weather.main !== "undefined" ? (
            <div className='main-wrapper'>
              <p>{weather.name}</p>
              <h2>{Math.floor(weather.main.temp)}°C</h2>
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (<span>"No existing town!"</span>)}
      </div>
      );
}

export default App;