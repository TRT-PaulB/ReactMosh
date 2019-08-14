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

  handleDelete = counterId => {
    console.log("event handler log: " + counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              value={counter.value}
              id={counter.id}
              onDelete={this.handleDelete}
            />
          </div>
        ))}
      </React.Fragment>
    );
  } // selected={true}
}

export default Counters;
