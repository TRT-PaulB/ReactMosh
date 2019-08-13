import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {  // OLD heavy handed way ==> better to convert function into an Arrow Function
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);

  //     // means handleIncrement will always refrence this class instance
  //     // otherwise it would be Window, or if strict is enabled, then undefined
  //   }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // ARROW FUNCTIONS INHERIT THE THIS KEYWORD
  //   handleIncrement() {
  //     console.log("handle increment..", this.state.count);
  //   }

  handleIncrement = () => {
    //console.log("handle increment..", this.state);

    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
