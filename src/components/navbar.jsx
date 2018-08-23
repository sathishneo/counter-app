import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      // As a heading
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default NavBar;
