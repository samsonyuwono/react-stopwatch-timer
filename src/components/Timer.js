import React, { Component } from "react";
import SplitList from "./SplitList";
import "../styles/timer.scss";

class Timer extends Component {
  state = {
    status: false,
    runningTime: 0,
    splits: [],
    selectedSplit: 0
  };

  handleOnClick = state => {
    if (
      this.state.runningTime === 0 ||
      this.state.selectedSplit === this.state.runningTime
    ) {
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime, status: true });
      });
    } else {
      this.setState({
        splits: [...this.state.splits, this.state.runningTime]
      });
    }
  };

  targetSplit = time => {
    clearInterval(this.timer);
    //filters out all splits after slected split
    const newSplitStart = this.state.splits.filter(split => split <= time);
    this.setState({
      status: false,
      runningTime: time,
      splits: newSplitStart,
      selectedSplit: time
    });
  };

  handleOnReset = () => {
    clearInterval(this.timer);
    this.setState({ status: false, runningTime: 0, splits: [] });
  };

  render() {
    const { status, runningTime } = this.state;
    return (
      <div className="timer-container">
        <p className="time">{runningTime} ms</p>
        <div className="button-wrapper">
          <button onClick={this.handleOnClick}>
            {status ? "Split" : "Start"}
          </button>
          <button onClick={this.handleOnReset}>Reset</button>
        </div>
        <ul className="split-list">
          {this.state.splits.map(split => (
            <SplitList
              key={split}
              split={split}
              selectedSplit={this.state.selectedSplit}
              targetSplit={this.targetSplit}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Timer;
