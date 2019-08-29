import http from "./httpService";
//import config from "../config.json";
import config from "../config.json";

//const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(config.apiEndpoint + "/movies");
}

export function deleteMovie(id) {
  return http.delete(config.apiEndpoint + "/movies/" + id);
}
