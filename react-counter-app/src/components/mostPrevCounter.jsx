import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  // could add child element within Counter in the Counters.jsx
  // --> <h4>Counter {counter.id}</h4>
  // whic means we could use: {this.props.children} above span to display them
  // --> {this.props.children}

  // render()
  // console.log("props", this.props); // Plain javascript object, includes children
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  } // notice this.handleIncrement is an inline function because it is passing an argument

  // ARROW FUNCTIONS INHERIT THE THIS KEYWORD
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
