import React, { useState, useEffect } from 'react';

export default function ProjectDetails({ onSubmit }) {
  const [projects, setProjects] = useState([
    {
      projectName: "",
      projectGuidName: "",
      projectStatus: "",
      projectStk: [],
      projectMember: [{ memberName: "" }],
      projectLink: "",
    },
  ]);

  useEffect(() => {
    // This will call the onSubmit prop function whenever projects state changes
    onSubmit(projects);
  }, [projects]); // Only re-run the effect if projects changes

  const handleChange = (e, index, subIndex) => {
    const { name, value } = e.target;
    setProjects(currentProjects => {
      const updatedProjects = [...currentProjects];
      if (name === "projectStk") {
        // Handle the projectStk as a special case
        const stkValue = value.split(' ').filter(v => v); // Split by spaces and remove empty strings
        updatedProjects[index] = {
          ...updatedProjects[index],
          projectStk: stkValue,
        };
      } else if (subIndex !== undefined) {
        // Handle project members
        const updatedMembers = updatedProjects[index].projectMember.map((member, idx) => {
          return idx === subIndex ? { ...member, [name]: value } : member;
        });
        updatedProjects[index] = {
          ...updatedProjects[index],
          projectMember: updatedMembers,
        };
      } else {
        // Handle other fields
        updatedProjects[index] = {
          ...updatedProjects[index],
          [name]: value,
        };
      }
      return updatedProjects;
    });
  };

  const handleAddProject = () => {
    setProjects(currentProjects => [
      ...currentProjects,
      {
        projectName: "",
        projectGuidName: "",
        projectStatus: "",
        projectStk: [],
        projectMember: [{ memberName: "" }],
        projectLink: "",
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    setProjects(currentProjects => currentProjects.filter((_, idx) => idx !== index));
  };

  const handleAddMember = (index) => {
    setProjects(currentProjects => {
      const updatedProjects = [...currentProjects];
      updatedProjects[index].projectMember.push({ memberName: "" });
      return updatedProjects;
    });
  };

  const handleRemoveMember = (index, subIndex) => {
    setProjects(currentProjects => {
      const updatedProjects = [...currentProjects];
      const updatedMembers = updatedProjects[index].projectMember.filter((_, idx) => idx !== subIndex);
      updatedProjects[index].projectMember = updatedMembers;
      return updatedProjects;
    });
  };

  const handleTechStackChange = (e, index) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTechStack = e.target.value.trim();
      setProjects(currentProjects => {
        const updatedProjects = [...currentProjects];
        updatedProjects[index].projectStk.push(newTechStack);
        return updatedProjects;
      });
      e.target.value = '';
    }
  };

  const handleDeleteTechStack = (projectIndex, techIndex) => {
    setProjects(currentProjects => {
      const updatedProjects = [...currentProjects];
      updatedProjects[projectIndex].projectStk.splice(techIndex, 1);
      return updatedProjects;
    });
  };

  return (
    <div>
      <h3 className="h3higlight">Project Details</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={(e) => handleChange(e, index)}
          />
          <label>Project Tech Stack:</label>
          <div>
            {project.projectStk.map((tech, techIndex) => (
              <span key={techIndex} className="tag">
                {tech}
                <button type="button" className='tagdelete' onClick={() => handleDeleteTechStack(index, techIndex)}>
                  X
                </button>
              </span>
            ))}
            <input
              type="text"
              onKeyDown={(e) => handleTechStackChange(e, index)}
              placeholder="Type tech stack and press Enter"
            />
          </div>
          <h4>Project Members</h4>
          {project.projectMember.map((member, subIndex) => (
            <div key={subIndex}>
              <label>Member Name:</label>
              <input
                type="text"
                name="memberName"
                value={member.memberName}
                onChange={(e) => handleChange(e, index, subIndex)}
              />
              {subIndex > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveMember(index, subIndex)}
                >
                  Remove Member
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddMember(index)}>
            Add Member
          </button>
          <label>Project Link:</label>
          <input
            type="text"
            name="projectLink"
            value={project.projectLink}
            onChange={(e) => handleChange(e, index)}
          />
          <button type="button" onClick={() => handleRemoveProject(index)}>
            Remove Project
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
      <br />
      <hr />
      <br />
    </div>
  );
}
