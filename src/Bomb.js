// your Bomb code here!
import React, { Component } from "react";
class Bomb extends Component {


  constructor(props) {
    super(props);
    this.state= {
      secondsLeft: props.initialCount
    };
  }
  render() {
    let result
    if (this.state.secondsLeft > 0) {
       result =`${this.state.secondsLeft} seconds left before I go boom!`;
    } else {
      result = `Boom!`;
    }
    return <div>{result}</div>;
  }
}

export default Bomb;
