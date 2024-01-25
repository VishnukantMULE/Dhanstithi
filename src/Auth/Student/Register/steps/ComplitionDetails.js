import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


export default function CompletionDetails({ nextStep }) {
  const navigate = useNavigate();

  const [skillRatings, setSkillRatings] = useState({
    presentationSkills: 1,
    englishproficiency:1,
    groupDiscussion: 1,
    publicSpeaking: 1,
    problemSolving: 1,
    criticalThinking: 1,
    leadership: 1,
    collaboration: 1,
    timeManagement: 1,
  });



  const handleSliderChange = (skill, value) => {
    setSkillRatings((prevRatings) => ({
      ...prevRatings,
      [skill]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
     
  
      const backstepdata = Cookies.get("formData");
      const existingFormData = backstepdata ? JSON.parse(backstepdata) : {};
  
      const updatedFormData = {
        ...existingFormData,
        skillRatings,
      };
      Cookies.set("formData", JSON.stringify(updatedFormData));
  
      console.log("Data to be sent to backend:", updatedFormData);
  
      const response = await fetch("https://dhyanstithi.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
  
      if (response.ok) {
        console.log("Form data submitted successfully!");
        const responseData = await response.json();
        navigate('/thanks')
        console.log("Response from the backend:", responseData);
      } else {
        console.error("Error submitting form data to the backend:", response.statusText);
      }
    } catch (error) {
      console.error("Error storing form data or sending request:", error);
    }
  };
  
  
  
  return (
    <div className="completion-container">
      <div className="registration-container">
        <h2 className="lhead">Enter Soft Skill Details</h2>
        <hr />
        <br />
        <div className="skill-sliders-container">
          {Object.keys(skillRatings).map((skill) => (
            <div key={skill}>
              <label>{skill}:</label>
              <input
                type="range"
                min="1"
                max="10"
                value={skillRatings[skill]}
                onChange={(e) => handleSliderChange(skill, parseInt(e.target.value))}
              />
              <span>{skillRatings[skill]}</span>
            </div>
          ))}
        </div>
        <br />
       
        <br />
        <div className="btn-position">
          <span></span>
          <button
            type="button"
            className="btn btn-primary next-step"
           
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
