import React, { Component } from "react";
import Timer from "./components/Timer.js";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;
