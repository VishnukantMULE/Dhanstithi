

import React, { useState, useEffect } from 'react';
import HomeNavbar from '../../components/Navbar/HomeNavbar'
import './Landing.css'


const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosition(window.pageYOffset));
    return () => window.removeEventListener('scroll', setScrollPosition);
  }, []);

  const glowRadius = Math.min(scrollPosition / 100, 50);
  const glowOpacity = Math.min(scrollPosition / 200, 1);

  return (
    <div>
      <HomeNavbar />
      <div className="lightbulb-container">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#fff" />
          <circle
            cx="50"
            cy="50"
            r={20 + glowRadius}
            fill="#fffaeb"
            opacity={glowOpacity}
            className="glow"
          />
        </svg>
      </div>
    </div>
  );
};

export default Landing;
