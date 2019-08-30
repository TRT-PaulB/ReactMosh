import React, { Component } from "react";
import auth from "../services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  // destructure from props
  // rename componet to get the capital C
  // routes can use component OR render function, not both
  // the route might need other properties, so pass the rest through...
  // so, no need to specify:   path={path}
  return (
    <Route
      {...rest}
      exact
      render={props => {
        if (!auth.getCurentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
