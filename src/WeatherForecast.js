import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weather-temperatures">
            <span className="weather-temperature-max"> 19 °</span>
            <span className="weather-temperature-min">10 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
