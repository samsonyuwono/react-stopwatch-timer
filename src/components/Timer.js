import React, { Component } from "react";
import SplitList from "./SplitList";

class Timer extends Component {
  state = {
    status: false,
    runningTime: 0,
    splits: []
  };

  handleOnClick = () => {
    if (this.state.runningTime === 0) {
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime, status: true });
      });
    } else {
      this.setState({
        splits: [...this.state.splits, this.state.runningTime]
      });
      console.log(this.state.splits);
    }
  };

  handleOnReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
  };

  render() {
    const { status, runningTime } = this.state;
    return (
      <div className="timer-container">
        <p>{runningTime} ms</p>
        <button onClick={this.handleOnClick}>
          {status ? "Split" : "Start"}
        </button>
        <button onClick={this.handleOnReset}>Reset</button>
        <ul>
          {this.state.splits.map(split => (
            <SplitList key={split} split={split} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Timer;
