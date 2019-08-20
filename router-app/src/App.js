import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
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
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
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

// make option parameters with: ?
// <Route path="/posts/:year?/:month?" component={Posts} />

// try querySrting on the piosts page...
// http://localhost:3000/posts/2018/06?sortBy=newest&approved=true
// note: params on right of ? in url are always optional

// Enter a bad URL to test redirect:
// http://localhost:3000/bad
// http://localhost:3000/messages

// example of programmatic navigation from details button back to home
// see productDetails.handleSave()
