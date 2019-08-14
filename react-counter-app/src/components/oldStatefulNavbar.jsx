import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            Total: {this.props.numItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
