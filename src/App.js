import React from "react";
import Weather from './Weather';
import './App.css';

export default  function App() {

  return (
    <div className="App">
      <div className="container">
 
  <Weather />
  <footer > 
    This project was coded by Azam and is open-soursed on  {""}
    <a href="https://github.com/Azam2012/react-weather-app" target="_blank">
GitHub
    </a>
  </footer>
  </div>
    </div>
  );
}


