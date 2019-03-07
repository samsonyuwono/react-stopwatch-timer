import React, { Component } from "react";

class Timer extends Component {
  state = {
    status: false,
    runningTime: 0
  };
  handleOnClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };

  handleOnReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, running: false });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>
        <button onClick={this.handleOnClick}>
          {status ? "Stop" : "Start"}
        </button>
        <button>Split</button>
        <button onClick={this.handleOnReset}>Reset</button>
      </div>
    );
  }
}

export default Timer;
