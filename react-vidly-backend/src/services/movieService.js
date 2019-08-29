import http from "./httpService";

// note destructuring here...
//import config from "../config.json";
import { apiUrl } from "../config.json";

const moviesEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(id) {
  return http.get(moviesEndpoint + "/" + id);
}

export function deleteMovie(id) {
  return http.delete(moviesEndpoint + "/" + id);
}

export function saveMovie(movie) {
  console.log("moviesEndpoint = " + movie._id);
  console.log("mdaily rental rate = " + movie.rate);

  // OK, bugs in the example - fix here to revert the rate of the form to dailyRentalRate
  // note this will need plugging in
  movie.dailyRentalRate = 5;
  delete movie.rate;

  if (movie._id) {
    // movie exists, so update it
    // avoid having _id on both object and url......(seems wierd)
    // and don't directly modify the movie in state
    const body = { ...movie };
    delete body._id;
    return http.put(moviesEndpoint + "/" + movie._id, body);
  }

  // movie is new, so post it
  return http.post(moviesEndpoint, movie);
}
