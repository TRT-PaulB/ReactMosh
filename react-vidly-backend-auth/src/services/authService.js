import http from "./httpService";
import { apiUrl } from "../config.json";

const authEndpoint = apiUrl + "/auth";

export function login(email, password) {
  return http.post(authEndpoint, { email: email, password: password });
}
