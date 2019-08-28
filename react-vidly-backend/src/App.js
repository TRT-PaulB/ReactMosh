import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./common/navbar";
import Movies from "./components/movies";
import LoginForm from "./components/login";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import DisplayMovieForm from "./components/displayMovie";
import "./App.css";

// new for vidly backend: npm react-toastify and axios
// and plugin the toast container markup
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/rentals" exact component={Rentals} />
            <Route path="/movies" exact component={Movies} />

            <Redirect from="/" exact to="/movies" />

            <Route path="/not-found" component={NotFound} />

            <Route path="/movies/:movieId?" component={DisplayMovieForm} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
// <Route path="/movies/new" component={DisplayMovieForm} />
export default App;

// note: could also use <div className="content">
