import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <h2>Vidly</h2>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/customers">Customers</NavLink>
      </li>
      <li>
        <NavLink to="/rentals">Rentals</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
