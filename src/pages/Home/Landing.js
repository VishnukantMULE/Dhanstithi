import React from "react";
import HomeNavbar from "../../components/Navbar/HomeNavbar";
import "./Landing.css";  
import bgimage from './Image/bg4.jpg'

const Landing = () => {
  return (
    <div className="page-container">
      <HomeNavbar />
      <div className="lightbulb-container">
        <img className="imagemove" src={bgimage} alt="Student Profile" />
        {/* <h2>Dhanstithi </h2>
        <p>Build a comprehensive student profile to track progress and development.</p> */}
      </div>
      <div className="content">
        <section className="ranking-section">
          <h2>Student Rankings</h2>
          <p>See how you stack up against other students. AI-powered rankings for accurate assessments.</p>
        </section>
        
        <section className="recommendation-section">
          <h2>Find Weak Areas and Recommendations</h2>
          <p>Identify weak areas and receive personalized recommendations for improvement.</p>
        </section>

        <section className="development-section">
          <h2>Overall Student Development</h2>
          <p>Experience holistic development across various categories - communication, technical skills, and more.</p>
        </section>


        <section className="ai-technology-section">
          <h2>AI Technology and Data Scraping</h2>
          <p>Utilize cutting-edge AI technology and data scraping to enhance skill assessment.</p>
        </section>

      </div>
      <div className="footer-container">
        <p>&copy; 2024 Dhanstithi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
