import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`navbar${isSidebarOpen && isMobile ? " sidebar-open" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span>Dhanstithi</span>
        </div>
        {isMobile ? (
          <>
            <button className="mobile-menu-button" onClick={toggleSidebar}>
              {isSidebarOpen ? "✕" : "☰"}
            </button>
            {isSidebarOpen && (
              <div className="mobile-close-button" onClick={closeSidebar}>
                ✕
              </div>
            )}
          </>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <div class="dropdown">

           
                  <a href="/studentlogin" className="nav-link">
                    Student
                  </a>
                <div class="dropdown-content">
                  <a href="/studentregister">Register</a>
                  <a href="/studentlogin">Login</a>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a href="/teacher" className="nav-link">
                Teacher
              </a>
            </li>
            <li className="nav-item">
              <a href="/menter" className="nav-link">
                Menter
              </a>
            </li>
          </ul>
        )}
      </div>
      {isMobile && isSidebarOpen && (
        <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="/studentlogin" className="sidebar-link">
                Student
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/teacher" className="sidebar-link">
                Teacher
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/menter" className="sidebar-link">
                Menter
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
