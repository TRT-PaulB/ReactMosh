import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year/:month" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Use component only if no passing props to the component
// <Route path="/products" component={Products} />

// pass trhough custom prop sortBy + props (for history, location and match)
//  render={props => <Products sortBy="newest" {...props} />}

// Try this URL to access ProductDetails:
// http://localhost:3000/products/1
// notice to access this id=1 in ProductDetails
// {this.props.match.params.id}
// now click on products.......
