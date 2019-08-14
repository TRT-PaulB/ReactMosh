import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  } // selected={true}
}

export default Counters;
