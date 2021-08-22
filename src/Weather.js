import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData , setWeatherData] = useState({ready: false})
   
function handleResponse(response) {
    setWeatherData({
        ready: true,
        date : new Date( response.data.dt * 1000) ,
        temperature : response.data.main.temp,
        description : response.data.weather[0].description,
        icon : "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
        humidity : response.data.main.humidity,
        wind : response.data.wind.speed,
        city : response.data.name,
    })
   

} 
if (weatherData.ready) {
    return( 
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input  type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
 <input type="Submit"   value="search" className="btn btn-primary  w-100"/>
                </div>
               
                </div>
            </form>
             <div className="row"> 
            <div className="col-7">
            <h1>{weatherData.city}</h1>
           
            <ul> 
                <li> <FormattedDate  date={weatherData.date} /></li>
              <li className= "text-capitalize" >{weatherData. description} </li>
            </ul>
                  </div>
                
              <div className="col-5" >
    
              <img src= {weatherData.iconUrl}
                alt= {weatherData.description} className="float-left" />

              <span className="temperature" >{""} {Math.round(weatherData.temperature)} </span>
              <span className="unit" >°C </span>
            
              <ul>
                   
                  <li> Humidity : {weatherData.humidity}% </li>
                   <li>Wind : {Math.round(weatherData.wind)} km/h</li>
              </ul>
</div>
            </div>
        </div>
    )
} else {
  const apiKey = "23299a9890a18af9b64db3fe1ab69a3a";
   
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
 return "Loadind..."
}
}