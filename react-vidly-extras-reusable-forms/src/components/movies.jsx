import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/pagination";
import { paginate } from "../utils/pageSplicer";
import ListGroup from "../common/listgroup";
import MoviesTable from "../common/moviesTable";
import _ from "lodash"; // used for sorting
import { Link } from "react-router-dom";

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

  handleSorting = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
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

    return { totalCount: filteredMovies.length, data: pagedMovies };
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      sortColumn,
      selectedGenre,
      currentPage,
      numItemsPerPage,
      genres
    } = this.state;
    const { data: movies, totalCount } = this.getPagedData();

    if (moviesCount === 0) return <p>No movies in the database</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleItemSelect}
            selectedItem={selectedGenre}
          />
        </div>

        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Create New Movie
          </Link>
          <p>Showing {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
            onSort={this.handleSorting}
            sortColumn={sortColumn}
          />
          <Pagination
            currentPage={currentPage}
            totalItems={totalCount}
            numItemsPerPage={numItemsPerPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
//

/* 
ALTERNATIVE IS A BUTTON:

<button
            className="btn btn-primary"
            onClick={() => this.props.history.push("/movies/new")}
            style={{ marginBottom: 20 }}
          >
            Create New Movie
          </button>
*/

export default Movies;
