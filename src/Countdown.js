import React, { Component } from "react";
// import PropTypes from "prop-types";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown();
      date ? this.setState(date) : clearInterval(this.interval);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateCountdown() {
    let diff =
      (Date.parse(new Date("2019-8-24 00:00:00").toUTCString()) -
        Date.parse(new Date().toUTCString())) /
      1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        <CounterPlate
          count={countDown.days}
          name={countDown.days === 1 ? "Day" : "Days"}
        />
        <CounterPlate count={countDown.hours} name={"Hours"} />
        <CounterPlate count={countDown.min} name={"Min"} />
        <CounterPlate count={countDown.sec} name={"Sec"} />
      </div>
    );
  }
}
const CounterPlate = props => {
  const addLeadingZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };
  return (
    <span className="Countdown-col">
      <span className="Countdown-col-element">
        <strong>{addLeadingZeros(props.count)}</strong>
        <span>{props.name}</span>
      </span>
    </span>
  );
};
// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

// Countdown.defaultProps = {
//   date: new Date()
// };

export default Countdown;
