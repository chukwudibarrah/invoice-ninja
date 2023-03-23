import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Input"
          onClick={() => props.handlePageChange("Input")}
          className={props.currentPage === "Input" ? "nav-link active" : "nav-link"}
        >
          Input Page
        </a>
      </li>
    </ul>
  );
}

export default Navbar;