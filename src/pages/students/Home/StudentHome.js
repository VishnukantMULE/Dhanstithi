import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRankingStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { SiSololearn } from "react-icons/si";




import "./style/Home.css";
import StudentLanding from "../StudentLanding/StudentLanding";
export default function StudentHome() {
  const navigate = useNavigate();

  return (
    <div className="studentpages">
      <div className="navbar-student">
        <div className="navbar-container">
          <div onClick={() => navigate("/")} className="navbar-brand-st">
            <span>Dhanstithi</span>
          </div>
          <ul className="navbar-nav">
            <li className="searchstudent">
              <input type="text" className="inputbox" />
            </li>
            <li className="nav-item-options">
              <FaRankingStar size={20}/>
            </li>
            <li className="nav-item-options">
              <FaUser size={20}/>

            </li>
            <li className="nav-item-options">
              <AiFillNotification size={20}/>
            </li>
            <li className="nav-item-options">

              <SiSololearn size={20}/>
            </li>

          </ul>
        </div>
      </div>
      <StudentLanding/>
    </div>
  );
}
