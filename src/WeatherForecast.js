import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(true);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(false);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="weather-temperatures">
              <span className="weather-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="weather-temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3299a9890a18af9b64db3fe1ab69a3a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
