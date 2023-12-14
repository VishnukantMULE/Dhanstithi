import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRankingStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { SiSololearn } from "react-icons/si";




import "./style/Home.css";
export default function StudentHome() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div onClick={() => navigate("/")} className="navbar-brand">
            <span>Dhanstithi</span>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item-options">
              <FaRankingStar />
            </li>
            <li className="nav-item-options">
              <FaUser />

            </li>
            <li className="nav-item-options">
              <AiFillNotification />
            </li>
            <li className="nav-item-options">

              <SiSololearn />
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
}
