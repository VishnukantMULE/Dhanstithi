import React, { useState } from "react";
import Cookies from "js-cookie";


export default function EduDetails( {backStp,nextStep} ) {
  const [formD, setformD] = useState({
    tenthSchoolName: '',
    tenthBoard: '',
    tenthPassingYear: '',
    tenthPercentage: '',
    higherEducationType: '12th',
    collegeName: '',
    higherPassingYear: '',
    higherBoard: '',
    higherPercentage: '',
    diplomaCollegeName: '',
    diplomaBranch: '',
    diplomaPassingYear: '',
    diplomaPercentage: '',
    currentCollege: '',
    currentsem: '',
    branch: '',
    moodleId: '',
    sgpaSem1: '',
    sgpaSem2: '',
    sgpaSem3: '',
    sgpaSem4: '',
    sgpaSem5: '',
    sgpaSem6: '',
    sgpaSem7: '',
    sgpaSem8: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'currentsem') {
      const resetvlu = {};
      sem.slice(0, sem.indexOf(value)).forEach((prevSem) => {
        const key = `sgpa${prevSem.replace(/\s+/g, '')}`;
        resetvlu[key] = '';
      });

      setformD((preD) => ({
        ...preD,
        ...resetvlu,
        [name]: value,
      }));
    } else {
      setformD((preD) => ({
        ...preD,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formD);
  };
  const handleNextClick = () => {
    try {
      const backstepdata = Cookies.get("formData");
      const existingFormData = backstepdata ? JSON.parse(backstepdata) : {};

      const updatedFormData = {
        ...existingFormData,
        ...formD,
      };
      Cookies.set("formData", JSON.stringify(updatedFormData));

      console.log("Stored Cookie:", Cookies.get("formData"));
      nextStep();
    } catch (error) {
      console.error("Error storing form data:", error);
    }
  };

  const sem = [
    "SEM I",
    "SEM II",
    "SEM III",
    "SEM IV",
    "SEM V",
    "SEM VI",
    "SEM VII",
    "SEM VIII",
  ];
  const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

  return (
    <div>
      <div className="registration-container">
        <h2 className="lhead">Enter Education Details</h2>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <h3 className="h3higlight">Xth Std Details</h3>
          <div className="sectionedu">

            <label>10th School Name:</label>
            <input type="text" name="tenthSchoolName" value={formD.tenthSchoolName} onChange={handleChange} />
            <div className="boarddetails">




              {/* <label  >Board:</label> */}
              <select className="custom-dropdown" name="tenthBoard" value={formD.tenthBoard} onChange={handleChange}>
                <option value="" > Select Board Name</option>

                <option value="SSC" >SSC</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="Others">Others</option>
              </select>


              <label htmlFor="tenthPassingYear" className="inline-label">
                Passing Year:
              </label>
              <select
                name="tenthPassingYear"
                value={formD.tenthPassingYear}
                onChange={handleChange}
                className="custom-dropdown"
              >
                <option value="">Select Passing Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>



              <label>10th Percentage:</label>
              <input type="number" name="tenthPercentage" value={formD.tenthPercentage} onChange={handleChange} />
            </div>

          </div>
          <h3 className="h3higlight">Higher Secondary Details</h3>
          <div className="sectionedu">

            <label>Higher Education Type:</label>
            <select
              className="custom-dropdown"
              name="higherEducationType"
              value={formD.higherEducationType}
              onChange={handleChange}
            >
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
            </select>
            {formD.higherEducationType === '12th' && (
              <>
                <label>College Name:</label>
                <input type="text" name="collegeName" value={formD.collegeName} onChange={handleChange} />
                <div className="boarddetails">


                  <label>Higher Passing Year:</label>
                  <select
                    name="higherPassingYear"
                    value={formD.higherPassingYear}
                    onChange={handleChange}
                    className="custom-dropdown"
                  >
                    <option value="">Select Passing Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>


                  <label>Higher Board:</label>
                  <select className="custom-dropdown" name="higherBoard" value={formD.higherBoard} onChange={handleChange}>
                  <option value="">select Board</option>

                    <option value="HSC">HSC</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="Others">Others</option>
                  </select>

                  <label>Higher Percentage:</label>
                  <input type="text" name="higherPercentage" value={formD.higherPercentage} onChange={handleChange} />
                </div>
              </>
            )}

            {formD.higherEducationType === 'Diploma' && (
              <>
                <label>Diploma College Name:</label>
                <input type="text" name="diplomaCollegeName" value={formD.diplomaCollegeName} onChange={handleChange} />
                <div className="boarddetails">

                  <label>Diploma Branch:</label>
                  <select className="custom-dropdown" name="diplomaBranch" value={formD.diplomaBranch} onChange={handleChange}>
                    <option value="Civil">Civil</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>

                  <label>Diploma Passing Year:</label>
                  <select
                    name="diplomaPassingYear"
                    value={formD.diplomaPassingYear}
                    onChange={handleChange}
                    className="custom-dropdown"
                  >
                    <option value="">Select Passing Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>


                  <label>Diploma Percentage:</label>
                  <input type="text" name="diplomaPercentage" value={formD.diplomaPercentage} onChange={handleChange} />
                </div>
              </>
            )}

          </div>
          <h3 className="h3higlight">Current Details</h3>
          <div className="sectionedu">

            <label>Current College:</label>
            <select name="currentCollege" value={formD.currentCollege} onChange={handleChange} className="custom-dropdown">
              <option value="">Select Current College</option>
              <option value="APShah">A P Shah Institute Of Technology Thane</option>
            </select>



            <label>Branch:</label>
            <select className="custom-dropdown" name="branch" value={formD.branch} onChange={handleChange}>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics and Communication">Electronics and Communication</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
            </select>

            <label>Current Sem:</label>
            <select className="custom-dropdown" name="currentsem" value={formD.currentsem} onChange={handleChange}>
              {sem.map((semester, index) => (
                <option key={index} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            {formD.currentsem && sem.indexOf(formD.currentsem) > 0 && (
              <>
                {sem.slice(0, sem.indexOf(formD.currentsem)).map((prevSem, index) => (
                  <div key={index}>
                    <label>{`SGPA ${prevSem}:`}</label>
                    <input
                      type="text"
                      name={`sgpa${prevSem.replace(/\s+/g, '')}`}
                      value={formD[`sgpa${prevSem.replace(/\s+/g, '')}`]}
                      onChange={handleChange} placeholder="00.00"
                    />
                  </div>
                ))}
              </>
            )}


            <label>Moodle ID:</label>
            <input type="text" name="moodleId" value={formD.moodleId} onChange={handleChange} />

          </div>
          <br />

          <div className="btnpostion">
            <button
              type="button"
              className="btn btn-primary prv-step"
              onClick={backStp}
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
          <br />

        </form>

      </div>
    </div>
  );
}
