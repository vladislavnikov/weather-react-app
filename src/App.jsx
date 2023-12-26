import React, { useState, useEffect } from "react";
import GetCity from "./common/city";
import "../public/styles/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import clouds from "./assets/cloud.png";
import sun from "./assets/sun.png";
import rain from "./assets/rain.png";
import snowflake from "./assets/snowflake.png";
import mist from "./assets/mist.png";

const WeatherImages = {
  Clouds: <img src={clouds} alt="cloud" />,
  Clear: <img src={sun} alt="sun" />,
  Rain: <img src={rain} alt="rain" />,
  Snow: <img src={snowflake} alt="snowflake" />,
  Mist: <img src={mist} alt="mist" />
  // Add more weather conditions and images as needed
};


const api = {
  key: {api.key},
};

const city = await GetCity();

function App() {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState(city);

  useEffect(() => {
    btnClicked();
  }, []);

  const btnClicked = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api.key}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => setWeather(json));

    document.getElementById("location").value = "";
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-wrapper">
        <input
          id="location"
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn-search" onClick={btnClicked}>
        <FontAwesomeIcon icon={ faSearch } style={{color: "black"}}/>
        </button>
      </div>

      {typeof weather.main !== "undefined" ? (
          <div className="main-wrapper">
            <p className="city">{weather.name}</p>
            {WeatherImages[weather.weather[0].main]}
            <h2>{Math.floor(weather.main.temp)}°C</h2>
            <h3>{weather.weather[0].main}</h3>
            <p className="weather">({weather.weather[0].description})</p>
          </div>
      ) : (
        <span>"No existing town!"</span>
      )}
    </div>
  );
}

export default App;
