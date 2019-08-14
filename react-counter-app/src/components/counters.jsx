import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    //console.log(counter);

    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = counter;
    counters[counterIndex].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    //console.log("event handler log: " + counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("handle reset");
    const counters = this.state.counters.map(c => {
      c.value = 0; // assigning
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  } // selected={true}
}

export default Counters;
