import React, { Component } from "react";
import Like from "../common/like";
import TableHeader from "../common/tableheader";
import TableBody from "../common/tableBody";

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
    {
      name: "liked",
      label: "Liked",
      content: (
        movie // function takes a movie object and returns a react element
      ) => (
        <Like
          liked={movie.liked}
          onLike={() => this.props.onLike(movie)}
          movie={movie}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
          movie={movie}
        >
          Delete{" "}
        </button>
      )
    }
    // use to provide a key on a blank header, ie for delete
  ];

  // use generic components where possible, and avoid having mixed layers of abstraction
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
