import React from "react";
import Weather from './Weather';
import './App.css';

export default  function App() {

  return (
    <div className="App">
      <div className="container">
  <Weather  defaultCity= "Berlin"/>
  <footer > 
    This project was coded by Azam and is open-soursed on  {""}
    <a href="https://github.com/Azam2012/react-weather-app" target="_blank" rel="noreferrer"> GitHub </a>
     and <a href="https://loving-lamport-fbcf4f.netlify.app/" rel="noreferrer"> hosted on Netlify</a>
  </footer>
  </div>
    </div>
  );
}


