import React, { Component } from "react";
import Like from "../common/like";

// convert a sfc to a class:
// 1) create sfc of the same name
// 2) copy contents into reader content (omit inital return statement)
// 3) remove 2nd export default
// 4) as there is no props argumnet automatically, use this.props

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort("title")}>Title</th>
            <th onClick={() => onSort("genre.name")}>Genre</th>
            <th onClick={() => onSort("numberInStock")}>Stock</th>
            <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
            <th onClick={() => onSort("liked")}>Liked</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onLike={() => onLike(movie)}
                  movie={movie}
                />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                  movie={movie}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
