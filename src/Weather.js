import React from "react";
import "./Weather.css";

export default function Weather() {

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
            <div className="col-8">
            <h1>Berlin</h1>
           
            <ul> 
                <li> Saturday 20:10 </li>
              <li> Rainy
                </li>
            </ul>
                  </div>
                
              <div className="col-4" >
    
              <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
                alt="Rainy" className="float-left" />

              <span className="temperature" >{""} 6 </span>
              <span className="unit" >°C </span>
            
              <ul>
                   <li>
                    precipitation : 45%
                  </li>
                  <li>
                      Humidity : 25%
                  </li>
                   <li>
                    Wind : 30 km/h
                  </li>
              </ul>
</div>

            </div>
        </div>
    )
}