import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./common/navbar";
import Movies from "./components/movies";
import LoginForm from "./components/login";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import DisplayMovieForm from "./components/displayMovie";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute";
//import jwtDecode from "jwt-decode";

// new for vidly backend: npm react-toastify and axios
// and plugin the toast container markup
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// notice auth is just an object label to encapsulate the contents for authService
import auth from "./services/authService";

class App extends Component {
  state = {};

  // componentDidMount() {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     const user = jwtDecode(jwt);
  //     // note iat is the time it was generated
  //     //console.log(user);
  //     this.setState({ user });
  //   } catch (e) {
  //     // do nothing here......just means it is an authorization error
  //   }
  // }

  componentDidMount() {
    const user = auth.getCurentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="content">
          <Switch>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/rentals" exact component={Rentals} />
            <Route
              path="/movies"
              exact
              render={props => <Movies {...props} user={user} />}
            />

            <Redirect from="/" exact to="/movies" />

            <Route path="/not-found" component={NotFound} />

            <ProtectedRoute
              path="/movies/:movieId?"
              component={DisplayMovieForm}
            />

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

/*  ORIGINAL PRE-EXTRACTING to ProtectedRoute
<Route
              path="/movies/:movieId?"
              exact
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <DisplayMovieForm {...props} />;
              }}
            />
            */
