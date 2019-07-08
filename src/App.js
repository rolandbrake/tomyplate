import React, { Component } from "react";
import Countdown from "./Countdown";
import "./App.css";
import background from "./background.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="bg-img" src={background} alt="" />
        <div className="App-counter">
          <Countdown />
          <a href="#" className="round_btn">
            Subscribe
          </a>
        </div>
      </div>
    );
  }
}

export default App;
