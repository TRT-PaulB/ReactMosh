import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import {paginate} from "../utils/pageSplicer";

class Movies extends Component {
  state = {
    movies: getMovies(),
    numItemsPerPage: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    console.log("deleting here....");
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
    console.log("handling page change - page clicked = " + page);
    this.setState({currentPage: page});
  }


  render() {
    const { length: moviesCount } = this.state.movies;
    const { movies, currentPage, numItemsPerPage } = this.state;
    const pagedMovies = paginate(movies, currentPage, numItemsPerPage);

    if (moviesCount === 0) return <p>No moves to display</p>;
    return (
      <React.Fragment>
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
        <Pagination currentPage={this.state.currentPage} totalItems={moviesCount} numItemsPerPage={this.state.numItemsPerPage} onPageChange={this.handlePageChange}/>
      </React.Fragment>
    );
  }
}

export default Movies;

// ALTERNATIVE - receives the DOMN event from like.jsx and then rethrows
// <Like liked={movie.liked} onClick={() => this.handleLiked(movie)} movie={movie}/>


                   



