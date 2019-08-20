import React, { Component } from "react";

class DisplayMovie extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.movieId}</h1>
        <button onClick={this.handleSave}>Save</button>
      </React.Fragment>
    );
  }
}

export default DisplayMovie;
