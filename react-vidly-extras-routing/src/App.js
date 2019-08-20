import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import "./App.css";
import NavBar from "./common/navbar";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import DisplayMovie from "./components/displayMovie";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/customers" exact component={Customers} />
            <Route path="/rentals" exact component={Rentals} />
            <Route
              path="/movies"
              render={props => (
                <main className="container">
                  <Movies />
                </main>
              )}
            />

            <Redirect from="/" exact to="/movies" />

            <Route path="/not-found" component={NotFound} />
            <Route path="/display-movie/:movieId?" component={DisplayMovie} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
