import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class DisplayMovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", rate: "" },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rate")
  };

  componentDidMount = () => {
    this.setState({ genres: getGenres() });

    const movieId = this.props.match.params.movieId; // coming in from the Route
    if (movieId === "new") return; //...continue only to populate4 the form

    const movie = getMovie(movieId);

    // redirect if the movie coulod not be retrieved
    // notice too that the return is required to stop this method executing beyond this line
    if (!movie) return this.props.history.replace("/not-found"); // remember replace deactivates the back button, push activates it

    this.setState({ data: this.getMovie(movie) });
  };

  getMovie = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      rate: movie.dailyRentalRate
    };
  };

  doSubmit = () => {
    //const { title } = this.state.data;
    // this.state.data.title

    console.log("saving to database (hopefully)");

    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { match, history } = this.props;

    return (
      <React.Fragment>
        <h1>Movie Form: {match.params.movieId}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", true)}
          {this.renderSelect("genreId", "Genre", false, this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", false)}
          {this.renderInput("rate", "Rate", false)}
          <button
            className="btn btn-primary"
            onClick={() => history.push("/movies")}
          >
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default DisplayMovieForm;

/*   
ISSUES:

submit button ius not blanked out because validation with Joi is not invoked..... but why?

*/
