import React, { useState } from "react";
import "./StudentRegister.css";
import "./BasicRegister.css";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import BasicDetails from "./steps/BasicDetails";
import EduDetails from "./steps/EduDetails";
import CareerDetails from "./steps/CareerDetails";
import ComplitionDetails from "./steps/ComplitionDetails";
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();


  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };



  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div onClick={() => navigate('/')} className="navbar-brand">

            <span >Dhanstithi</span>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/studentlogin" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="wizard">
          <div className="connecting-line"></div>
          <div className="steps">
            <div
              className={`step ${activeStep === 1 ? "active" : ""}`}
              onClick={() => setActiveStep(1)}
            >
              <FaUser />
            </div>
            <div
              className={`step ${activeStep === 2 ? "active" : ""}`}
              onClick={() => setActiveStep(2)}
            >
              <FaUserGraduate />
            </div>
            <div
              className={`step ${activeStep === 3 ? "active" : ""}`}
              onClick={() => setActiveStep(3)}
            >
              <GoGoal />
            </div>
            <div
              className={`step ${activeStep === 4 ? "active" : ""}`}
              onClick={() => setActiveStep(4)}
            >
              <IoCheckmarkDoneCircle />
            </div>
          </div>

          <div role="form">
            <div className="tab-content">
              <div
                className={`tab-pane ${activeStep === 1 ? "active" : ""}`}
                role="tabpanel"
                id="step1"
              >
                <BasicDetails nextStep={nextStep} />
              </div>
              <div
                className={`tab-pane ${activeStep === 2 ? "active" : ""}`}
                role="tabpanel"
                id="step2"
              >
                <EduDetails prevStep={prevStep} nextStep={nextStep} />


              </div>
              <div
                className={`tab-pane ${activeStep === 3 ? "active" : ""}`}
                role="tabpanel"
                id="step3"
              >
                <CareerDetails prevStep={prevStep} nextStep={nextStep} />

              </div>
              <div
                className={`tab-pane ${activeStep === 4 ? "active" : ""}`}
                role="tabpanel"
                id="complete"
              >
                <ComplitionDetails />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
