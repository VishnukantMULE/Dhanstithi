// Landing.jsx

import React, { useState, useEffect } from "react";
import HomeNavbar from "../../components/Navbar/HomeNavbar";
import "./Landing.css";  // Import your CSS file for styling

const Landing = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () =>
  //     setScrollPosition(window.pageYOffset)
  //   );
  //   return () => window.removeEventListener("scroll", setScrollPosition);
  // }, []);

  // const glowRadius = Math.min(scrollPosition / 100, 50);
  // const glowOpacity = Math.min(scrollPosition / 200, 1);

  return (
    <div className="page-container">
      <HomeNavbar />
      <div className="lightbulb-container">
        {/* <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="10" fill="#000" />

          <circle
            cx="50"
            cy="50"
            r={10 + glowRadius}
            fill="#000"
            opacity={glowOpacity}
            className="glow"
          />
          <circle
            cx="50"
            cy="50"
            r={15 + glowRadius}
            stroke="#000"
            strokeWidth="0.1"  // Corrected attribute name
            fill="none"
          />
        </svg> */}
      </div>
      <div className="content">
        {/* Your main content goes here */}
      </div>
      <div className="footer-container">
        <p>&copy; 2024 Dhanstithi . All rights reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
