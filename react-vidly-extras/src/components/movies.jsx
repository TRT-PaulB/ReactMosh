import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import {paginate} from "../utils/pageSplicer";
import ListGroup from "../common/listgroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    numItemsPerPage: 4,
    currentPage: 1
  };

  // it will takle time to get movies and genres, so get runtime error if we try load page into dom without his data
  // componentDidMount() is triggered when loading the DOM
  componentDidMount() {
    this.setState({movies: getMovies(), genres: getGenres()});
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
    this.setState({currentPage: page});
  }

  handleItemSelect = genre => {
    console.log("item selected...console", genre);

    // const filteredMovies = getMovies().filter(movie => movie._id === genre.__id);
    // this.setState({selectedGenre: genre, movies: filteredMovies});

    this.setState({selectedGenre: genre});
  }

  render() {
    const { length: moviesCount } = this.state.movies;
    const { movies, currentPage, numItemsPerPage, selectedGenre } = this.state;

    const filteredMovies = selectedGenre ? movies.filter(movie => movie.genre._id === selectedGenre._id) : movies;
    const pagedMovies = paginate(filteredMovies, currentPage, numItemsPerPage);

    if (moviesCount === 0) return <p>No moves to display</p>;
    return (
      <div className="row">

        <div className="col-2">
          <ListGroup items={this.state.genres} 
                      textProperty="name" 
                      valueProperty="_id" 
                      onItemSelect={this.handleItemSelect}
                      selectedItem={this.state.selectedGenre}/>
        </div>
        
        <div className="col">
          <p>Showing {moviesCount} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Liked</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {pagedMovies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} 
                          onLikeOpinion={this.handleLiked} 
                          movie={movie} 
                          />   
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination currentPage={this.state.currentPage} totalItems={filteredMovies.length} numItemsPerPage={this.state.numItemsPerPage} onPageChange={this.handlePageChange}/>
        </div>
      </div>
    );
  }
}

export default Movies;

// ALTERNATIVE - receives the DOMN event from like.jsx and then rethrows
// <Like liked={movie.liked} onClick={() => this.handleLiked(movie)} movie={movie}/>


                   



