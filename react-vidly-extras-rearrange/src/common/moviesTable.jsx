import React, { Component } from "react";
import Like from "../common/like";
import TableHeader from "../common/tableheader";

// INPUT INTERFACE
// columns: array
// sortColumn: object
// onSort: func

class MoviesTable extends Component {
  columns = [
    // note that this value will not change in the lifecycle of this component, so no need to put in state
    { name: "title", label: "Title" },
    { name: "genre.name", label: "Genre" },
    { name: "numberInStock", label: "Stock" },
    { name: "dailyRentalRate", label: "Rate" },
    { name: "liked", label: "Liked" },
    { key: "delete" } // use this to provide a key on a blank header, ie for delete
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
