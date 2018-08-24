//import React, { Component } from "react";
import React from "react";
/*
 * making it a stateless functional component
 * since the below class doesn't need the state
 * attribute since it get everything from the 
 * 'props' where it is being used (App.jsx)
 */
/*
class NavBar extends Component {
    render() {

    }
}
*/

/*
 * if we just use function Navbar, then
 * 'this' will not be inherited. So, to do 
 * that we need to either have a constructor (which is not
 * possible in a stateless functional component) or we need
 * to use the arrow function '=>' 
 */
//function NavBar() {
const NavBar = ({ totalCounters }) => {
  return (
    // As a heading
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>{" "}
      </span>
    </nav>
  );
};

export default NavBar;
