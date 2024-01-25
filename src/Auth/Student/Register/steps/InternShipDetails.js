import React, { useState } from 'react';

export default function InternShipDetails({ onSubmit }) {
  const [internships, setInternships] = useState([
    {
      companyName: '',
      internshipRole: '',
      totalMonths: '',
      status: '',
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedInternships = [...internships];
    updatedInternships[index] = {
      ...updatedInternships[index],
      [name]: value,
    };
    setInternships(updatedInternships);
    onSubmit(updatedInternships);
  };

  const handleAddInternship = () => {
    const newInternships = [
      ...internships,
      {
        companyName: '',
        internshipRole: '',
        totalMonths: '',
        status: '',
      },
    ];
    setInternships(newInternships);
    onSubmit(newInternships);
  };

  const handleRemoveInternship = (index) => {
    const updatedInternships = internships.filter((_, idx) => idx !== index);
    setInternships(updatedInternships);
    onSubmit(updatedInternships);
  };

  return (
    <div>
      {internships.map((internship, index) => (
        <div key={index}>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={internship.companyName}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Internship Role:</label>
          <input
            type="text"
            name="internshipRole"
            value={internship.internshipRole}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Total Months:</label>
          <input
            type="text"
            name="totalMonths"
            value={internship.totalMonths}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Status:</label>
          <select
            name="status"
            value={internship.status}
            onChange={(e) => handleChange(e, index)}
          >
            <option value="">Select Internship Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
          <button type="button" onClick={() => handleRemoveInternship(index)}>
            Remove Internship
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddInternship}>
        Add Internship
      </button>
    </div>
  );
}
