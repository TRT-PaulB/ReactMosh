import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/pagination";
import { paginate } from "../utils/pageSplicer";
import ListGroup from "../common/listgroup";
import MoviesTable from "../common/moviesTable";
import _ from "lodash"; // used for sorting

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    numItemsPerPage: 4,
    currentPage: 1,
    sortColumn: { column: "title", order: "asc" }
  };

  // it will takle time to get movies and genres, so get runtime error if we try load page into dom without his data
  // componentDidMount() is triggered when loading the DOM
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres }); // ie {genres: genres}
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(mov => mov._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSorting = column => {
    const sortColumn = { ...this.state.sortColumn };

    if (sortColumn.column === column) {
      // this is a direction change on the existing column sort
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      sortColumn.column = column;
    } else {
      // this is a new column sort in ascending order
      sortColumn.order = "asc";
      sortColumn.column = column;
    }

    this.setState({
      //sortColumn: { sortColumn } // not clear why this line would not work...
      sortColumn: { column: sortColumn.column, order: sortColumn.order }
    });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      movies,
      currentPage,
      numItemsPerPage,
      selectedGenre,
      sortColumn
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter(movie => movie.genre._id === selectedGenre._id)
        : movies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.column],
      [sortColumn.order]
    );

    const pagedMovies = paginate(sortedMovies, currentPage, numItemsPerPage);

    if (moviesCount === 0) return <p>No movies in the database</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleItemSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>

        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database</p>
          <MoviesTable
            movies={pagedMovies}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
            onSort={this.handleSorting}
          />
          <Pagination
            currentPage={this.state.currentPage}
            totalItems={filteredMovies.length}
            numItemsPerPage={this.state.numItemsPerPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;

// ALTERNATIVE - receives the DOMN event from like.jsx and then rethrows
// <Like liked={movie.liked} onClick={() => this.handleLiked(movie)} movie={movie}/>
