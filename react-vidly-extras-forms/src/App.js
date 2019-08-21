import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./common/navbar";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import DisplayMovie from "./components/displayMovie";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/customers" exact component={Customers} />
            <Route path="/rentals" exact component={Rentals} />
            <Route path="/movies" exact component={Movies} />

            <Redirect from="/" exact to="/movies" />

            <Route path="/not-found" component={NotFound} />
            <Route path="/movies/:movieId?" component={DisplayMovie} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

// note: could also use <div className="content">
