import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  let [city, setCity] = useState("");
  let [theWeather, setTheWeather] = useState("");

  function getForecast(response) {
    console.log(response.data);
    setTheWeather(
      <ul>
        <h1 className="city">The weather in {city}:</h1>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
        <li>Temperature: {Math.round(response.data.main.temp)} ºC</li>
        <li>{response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
      </ul>
    );
  }

  function api(event) {
    event.preventDefault();
    let apiKey = "69181bdb9d5f82f38a07c3cf8a85b271";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
  }

  function getWeather(event) {
    setCity(event.target.value);
  }

  return (
    <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <div className="justify-content-center" id="allDays">
          <form onSubmit={api} className="searchCity">
            <input
              type="search"
              placeholder="Enter your city......."
              onChange={getWeather}
            />
            <input type="submit" value="Search" />
          </form>
          <div>{theWeather}</div>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}
