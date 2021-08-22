import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData , setWeatherData] = useState({ready: false})
    const [city, setCity] = useState (props.defaultCity)
    
   
function handleResponse(response) {
    setWeatherData({
        ready: true,
        date : new Date( response.data.dt * 1000) ,
        temperature : response.data.main.temp,
        description : response.data.weather[0].description,
        icon : `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        humidity : response.data.main.humidity,
        wind : response.data.wind.speed,
        city : response.data.name,
    })
} 
function search(){ 
    const apiKey = "23299a9890a18af9b64db3fe1ab69a3a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event) {
event.preventDefault()
search(city);
}
function handlecityChange(event){
    setCity(event.target.value);
   

}
if (weatherData.ready) {
    return( 
        <div className="weather">
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-9">
                <input  type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handlecityChange}  />
                </div>
                <div className="col-3">
 <input type="Submit"   value="search" className="btn btn-primary  w-100"/>
                </div>
               
                </div>
            </form>
            <WeatherInfo  data={weatherData} />
            
        </div>
    )
} else {
  search()
 return "Loadind..."
}
}