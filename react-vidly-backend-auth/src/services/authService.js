import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const authEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(authEndpoint, {
    email: email,
    password: password
  });

  console.log(jwt);
  localStorage.setItem("token", jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
    //this.setState({ user });
  } catch (e) {
    // do nothing here......just means it is an authorization error
    // return null means there is no current user
    return null;
  }
}

export default {
  login,
  logout,
  getCurentUser,
  loginWithJwt
};
