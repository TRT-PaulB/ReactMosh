import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  console.log("user = " + user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavaltMarkup">
        <div className="navbar-nav" id="navbarNav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>

          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// https://getbootstrap.com/docs/4.3/components/navbar/
