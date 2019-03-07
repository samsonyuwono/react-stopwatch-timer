import React, { Component } from "react";
import "./App.scss";
import Timer from "./Timer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
        <Timer />
      </div>
    );
  }
}

export default App;
