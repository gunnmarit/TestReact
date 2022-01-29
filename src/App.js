import './App.css';
import React from "react";
import Forecast from "./Forecast";


function App() {
  return (
    <div className="App">
        <h1>what's the weather like</h1>
      <Forecast />
      <h3> Wherever you go, <br />
        no matter what the weather, <br />
        always bring your own sunshine. 
      </h3>
      <footer><a href= "https://github.com/gunnmarit/TestReact" target="_blank" rel="noreferrer" > Open-source code</a> by Gunn Marit Hagen</footer>
    </div>
  );
}

export default App;