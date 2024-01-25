import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import isUrl from "is-url";
import Cookies from "js-cookie";


import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import InternShipDetails from "./InternShipDetails";



export default function CareerDetails({ prevStep, nextStep }) {


  const [formData, setFormData] = useState({
    careerDomain: "",

    githubLink: "",
    linkedinLink: "",
    leetcodeLink: "",
    codingNinjaLink: "",
    hackerankLink: "",
    gfgLink: "",
    certifications: [
      {
        type: "",
        name: "",
        issuedDate: "",
      },
    ],
    projects: [],
    internships: [],
  });
  const isGithubLinkValid = isUrl(formData.githubLink);
  const islinkedinLinkValid = isUrl(formData.linkedinLink);
  const isleetcodeLinkValid = isUrl(formData.leetcodeLink);

  const iscodingNinjaLinkValid = isUrl(formData.codingNinjaLink);
  const ishackerankLinkValid = isUrl(formData.hackerankLink);




  const handleChange = (e, index) => {
    const { name, value } = e.target;
  
    if (index !== undefined) {
      const updatedCertifications = [...formData.certifications];
      updatedCertifications[index] = {
        ...updatedCertifications[index],
        [name]: value,
      };
  
      setFormData({
        ...formData,
        certifications: updatedCertifications,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleAddCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        {
          type: "",
          name: "",
          issuedDate: ""
          
        },
      ],
    });
  };

  const handleRemoveCertification = (index) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications.splice(index, 1);
    setFormData({
      ...formData,
      certifications: updatedCertifications,
    });
  };

  const handleProjectDetailsSubmit = (projectsData) => {
    setFormData({
      ...formData,
      projects: projectsData,
    });
  };


  const handleInternshipDetailsSubmit = (internshipsData) => {
    setFormData({
      ...formData,
      internships: internshipsData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleNextClick = () => {
    try {
      handleProjectDetailsSubmit(formData.projects);
      console.log("Project data is " + JSON.stringify(formData.projects));

      handleInternshipDetailsSubmit(formData.internships);
  
      const backstepdata = Cookies.get("formData");
      const existingFormData = backstepdata ? JSON.parse(backstepdata) : {};
  
      const updatedFormData = {
        ...existingFormData,
        ...formData
      };
  
      Cookies.set("formData", JSON.stringify(updatedFormData));
  
      console.log("Stored Cookie:", Cookies.get("formData"));
  
      nextStep();
    } catch (error) {
      console.error("Error storing form data:", error);
    }
  };
  

  return (
    <div>
      <div className="registration-container">
        <h2 className="lhead">Enter Your Work Details</h2>
        <hr />
        <br />
        <div>
          <h3 className="h3higlight">Career Goal</h3>
          <form onSubmit={handleSubmit}>
            <label>Career Domain:</label>
            <select className="custom-dropdown"
              name="careerDomain"
              value={formData.careerDomain}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Career Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="DevOps">DevOps</option>
            </select>
            <br />
            <hr />
            <br />
            <ProjectDetails onSubmit={handleProjectDetailsSubmit} />

            <h3 className="h3higlight">Links</h3>
            <label>GitHub Link:</label>
            <div className="linkvalid">
              <input
                type="text"
                name="githubLink"
                value={formData.githubLink}
                onChange={(e) => handleChange(e)}
              />
              {formData.githubLink && ( 
                isGithubLinkValid ? (
                  <span>
                    <FaCheckCircle size={25} color="green" />
                  </span>
                ) : (
                  <span>
                    <RiErrorWarningFill size={25} color="red" />
                  </span>
                )
              )}
            </div>
            <label>LinkedIn Link:</label>
            <div className="linkvalid">


              <input
                type="text"
                name="linkedinLink"
                value={formData.linkedinLink}
                onChange={(e) => handleChange(e)}
              />
              {formData.linkedinLink && ( // Check if the input is not empty
                islinkedinLinkValid ? (
                  <span>
                    <FaCheckCircle size={25} color="green" />
                  </span>
                ) : (
                  <span>
                    <RiErrorWarningFill size={25} color="red" />
                  </span>
                )
              )}
            </div>

            <label>Leetcode Link:</label>
            <div className="linkvalid">

              <input
                type="text"
                name="leetcodeLink"
                value={formData.leetcodeLink}
                onChange={(e) => handleChange(e)}
              />
              {formData.leetcodeLink && ( // Check if the input is not empty
                isleetcodeLinkValid ? (
                  <span>
                    <FaCheckCircle size={25} color="green" />
                  </span>
                ) : (
                  <span>
                    <RiErrorWarningFill size={25} color="red" />
                  </span>
                )
              )}
            </div>
            <label>Coading Ninja Link:</label>
            <div className="linkvalid">

              <input
                type="text"
                name="codingNinjaLink"
                value={formData.codingNinjaLink}
                onChange={(e) => handleChange(e)}
              />
              {formData.codingNinjaLink && ( // Check if the input is not empty
                iscodingNinjaLinkValid ? (
                  <span>
                    <FaCheckCircle size={25} color="green" />
                  </span>
                ) : (
                  <span>
                    <RiErrorWarningFill size={25} color="red" />
                  </span>
                )
              )}
            </div>
            <label>HackerRank Link:</label>
            <div className="linkvalid">

              <input
                type="text"
                name="hackerankLink"
                value={formData.hackerankLink}
                onChange={(e) => handleChange(e)}
              />
              {formData.hackerankLink && ( // Check if the input is not empty
                ishackerankLinkValid ? (
                  <span>
                    <FaCheckCircle size={25} color="green" />
                  </span>
                ) : (
                  <span>
                    <RiErrorWarningFill size={25} color="red" />
                  </span>
                )
              )}
            </div>

            <br />
            <hr />
            <br />

            {/* Certifications */}
            <h3 className="h3higlight">Certifications</h3>
            {formData.certifications.map((certification, index) => (
              <div key={index}>
                {/* Certification Fields */}
                <label>Certification Type:</label>
                <select className="custom-dropdown"
                  name="type"
                  value={certification.type}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="">Select Certification Type</option>
                  <option value="Global Certificate">Global Certificate</option>
                  <option value="Institute Level Certificate">
                    Institute Level Certificate
                  </option>
                  <option value="Self Placed Certificate">
                    Self Placed Certificate
                  </option>
                </select>

                <label>Certification Name:</label>
                <input
                  type="text"
                  name="name"
                  value={certification.name}
                  onChange={(e) => handleChange(e, index)}
                />

                <label>Certification Issued Date:</label>
                <input
                  type="date"
                  name="issuedDate"
                  value={certification.issuedDate}
                  onChange={(e) => handleChange(e, index)}
                />

                <button
                  type="button"
                  onClick={() => handleRemoveCertification(index)}
                >
                  Remove Certification
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCertification}>
              Add Certification
            </button>


            <h3 className="h3higlight">Internships</h3>
            <InternShipDetails onSubmit={handleInternshipDetailsSubmit} />



            <div className="btnpostion">
              <button
                type="button"
                className="btn btn-primary prv-step"
                onClick={prevStep}
              >
                &lt; Prev
              </button>
              <button
                type="button"
                className="btn btn-primary next-step"
                onClick={handleNextClick}
              >
                next &gt;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
