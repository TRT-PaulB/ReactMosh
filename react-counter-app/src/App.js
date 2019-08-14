import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
        <NavBar />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
