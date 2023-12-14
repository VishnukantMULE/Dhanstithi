import React, { useState } from "react";

export default function EduDetails({ prevStep, nextStep }) {
  const [formData, setFormData] = useState({
    tenthSchoolName: '',
    tenthBoard: '',
    tenthPassingYear: '',
    tenthPercentage: '',
    higherEducationType: '',
    collegeName: '',
    higherPassingYear: '',
    higherBoard: '',
    higherPercentage: '',
    diplomaCollegeName: '',
    diplomaBranch: '',
    diplomaPassingYear: '',
    diplomaPercentage: '',
    currentCollege: '',
    admissionYear: '',
    branch: '',
    moodleId: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

  return (
    <div>
      <div className="registration-container">
        <h2 className="lhead">Enter Education Details</h2>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="sectionedu">

            <label>10th School Name:</label>
            <input type="text" name="tenthSchoolName" value={formData.tenthSchoolName} onChange={handleChange} />
            <div className="inline-label">



              <label  >10th Board:</label>
              <select className="custom-dropdown" name="tenthBoard" value={formData.tenthBoard} onChange={handleChange}>
                <option value="SSC">SSC</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inline-label">
              <label htmlFor="tenthPassingYear" className="inline-label">
                10th Passing Year:
              </label>
              <select
                name="tenthPassingYear"
                value={formData.tenthPassingYear}
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
            </div>
            <div className="inline-label">
              <label>10th Percentage:</label>
              <input type="number" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} />
            </div>
          </div>

          {/* Higher Education Details */}
          <div className="sectionedu">

            <label>Higher Education Type:</label>
            <select className="custom-dropdown" name="higherEducationType" value={formData.higherEducationType} onChange={handleChange}>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
            </select>

            {formData.higherEducationType === '12th' && (
              <>
                <label>College Name:</label>
                <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} />

                <label>Higher Passing Year:</label>
                <input type="number" name="higherPassingYear" value={formData.higherPassingYear} onChange={handleChange} />

                <label>Higher Board:</label>
                <select className="custom-dropdown" name="higherBoard" value={formData.higherBoard} onChange={handleChange}>
                  <option value="HSC">HSC</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="Others">Others</option>
                </select>

                <label>Higher Percentage:</label>
                <input type="text" name="higherPercentage" value={formData.higherPercentage} onChange={handleChange} />
              </>
            )}

            {formData.higherEducationType === 'Diploma' && (
              <>
                <label>Diploma College Name:</label>
                <input type="text" name="diplomaCollegeName" value={formData.diplomaCollegeName} onChange={handleChange} />

                <label>Diploma Branch:</label>
                <select className="custom-dropdown" name="diplomaBranch" value={formData.diplomaBranch} onChange={handleChange}>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Computer Science">Computer Science</option>
                  {/* Add more options as needed */}
                </select>

                <label>Diploma Passing Year:</label>
                <input type="number" name="diplomaPassingYear" value={formData.diplomaPassingYear} onChange={handleChange} />

                <label>Diploma Percentage:</label>
                <input type="text" name="diplomaPercentage" value={formData.diplomaPercentage} onChange={handleChange} />
              </>
            )}

          </div>
          {/* Other Details */}
          <div className="sectionedu">

            <label>Current College:</label>
            <select name="currentCollege" value={formData.currentCollege} onChange={handleChange} className="custom-dropdown">
              <option value="">Select Current College</option>
              <option value="APShah">A P Shah Institute Of Technology Thane</option>
              {/* Add more options as needed */}
            </select>

            <label>Admission Year:</label>
            <input type="number" name="admissionYear" value={formData.admissionYear} onChange={handleChange} />

            <label>Branch:</label>
            <select className="custom-dropdown" name="branch" value={formData.branch} onChange={handleChange}>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics and Communication">Electronics and Communication</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              {/* Add more options as needed */}
            </select>

            <label>Moodle ID:</label>
            <input type="text" name="moodleId" value={formData.moodleId} onChange={handleChange} />

          </div>
          <br />

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
              onClick={nextStep}
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
