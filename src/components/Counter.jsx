import React from "react";
import "../App.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="flex">
        <button
          style={{ backgroundColor: "red" }}
          onClick={this.props.substract}
        >
          -
        </button>
        <h2>{this.props.count}</h2>
        <button
          style={{ backgroundColor: "green" }}
          onClick={this.props.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
