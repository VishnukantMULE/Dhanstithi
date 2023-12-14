import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
        
          <span>Dhanstithi</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/studentlogin" className="nav-link">Student</a>
          </li>
          <li className="nav-item">
            <a href="/teacher" className="nav-link">Teacher</a>
          </li>
          <li className="nav-item">
            <a href="/menter" className="nav-link">Menter</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
