import React, { Component } from "react";
import Like from "../common/like";

// convert a sfc to a class:
// 1) create sfc of the same name
// 2) copy contents into reader content (omit inital return statement)
// 3) remove 2nd export default
// 4) as there is no props argumnet automatically, use this.props

class MoviesTable extends Component {
  // OLD
  //   raiseSort = column => {
  //     const sortColumn = { ...this.props.sortColumn };
  //     if (sortColumn.column === column) {
  //       // this is a direction change on the existing column sort
  //       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //       sortColumn.column = column;
  //     } else {
  //       // this is a new column sort in ascending order
  //       sortColumn.order = "asc";
  //       sortColumn.column = column;
  //     }

  //     this.props.onSort(sortColumn); // THIS LINE PASSES BACK sortColumn via onSort function, relating to movies.handleSorting
  //   };

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th onClick={() => this.raiseSort("liked")}>Liked</th>
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
