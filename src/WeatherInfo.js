import { func } from "prop-types";
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo (props) {
    return (
         <div className="weatherInfo">
         <div className="row"> 
            <div className="col-7">
            <h1>{props.data.city}</h1>
           
            <ul> 
                <li> <FormattedDate  data={props.data.date} /></li>
              <li className= "text-capitalize" >{props.data. description} </li>
            </ul>
                  </div>
                
              <div className="col-5" >
                <div className="float-left">
    <WeatherIcon code={props.data.icon} />
    </div>
        
              <span className="temperature" >{""} {Math.round(props.data.temperature)} </span>
              <span className="unit" >°C </span>
            
              <ul>
                   
                  <li> Humidity : {props.data.humidity}% </li>
                   <li>Wind : {Math.round(props.data.wind)} km/h</li>
              </ul>
</div>
            </div>
            </div>
    )
}