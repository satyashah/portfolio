import React from 'react';
import './Projects.css';



const Projects = ({ projects }) => {
  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className='proj-section' id = "projects">
      <h1 className="proj-title">Projects</h1>
      <h3 className="proj-subtitle">Click to see the Project Repository or Article</h3>
      <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => handleProjectClick(project.link)}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;