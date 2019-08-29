import http from "./httpService";

// note destructuring here...
//import config from "../config.json";
import { apiUrl } from "../config.json";

const moviesEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function deleteMovie(id) {
  return http.delete(moviesEndpoint + "/" + id);
}
