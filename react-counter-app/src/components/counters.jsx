import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  } // selected={true}
}

export default Counters;
