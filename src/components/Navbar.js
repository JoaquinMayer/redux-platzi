import React from "react";
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <nav id="navbar">
      <Link to="/">Users</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}

export default Navbar;
