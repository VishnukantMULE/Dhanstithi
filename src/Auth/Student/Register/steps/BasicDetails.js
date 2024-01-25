import React, { useState } from "react";
import Cookies from "js-cookie";
// import { PiWarningFill } from "react-icons/pi";




export default function BasicDetails({ nextStep }) {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
  };

  const handleNextClick = () => {
    try {
      Cookies.set("formData", JSON.stringify(formData));
      console.log("Form data stored successfully:", formData);
      console.log("Stored Cookie:", Cookies.get("formData"));

      nextStep();
    } catch (error) {
      console.error("Error storing form data:", error);
    }
  };
  return (
    <div>
      <div className="registration-container">
        <h2 className="lhead">Enter Basic Details</h2>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="studentname">

            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name:</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div className="phone-input-container">
              <span className="country-code">+91</span>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="studentname"> */}
          <div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>

              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">College Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* <button>  <PiWarningFill />Verify
            </button> */}
          </div>
          <div className="btnpostion">
            <span></span>

            <button
              type="button"
              className="btn btn-primary next-step"
              onClick={handleNextClick}
            >
              next &gt;
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
