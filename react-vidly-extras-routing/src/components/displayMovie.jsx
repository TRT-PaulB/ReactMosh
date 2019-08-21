import React, { Component } from "react";

class DisplayMovie extends Component {
  render() {
    const { match, history } = this.props;

    return (
      <React.Fragment>
        <h1>Movie Form {match.params.movieId}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default DisplayMovie;
