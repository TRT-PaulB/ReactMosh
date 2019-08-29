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

// router.put("/:id", [auth], async (req, res) => {
// export function saveMovie(id) {
//   const saveMovieEndpoint = moviesEndpoint + "/" + id;
//   return http.post(saveMovieEndpoint, obj);
// }
