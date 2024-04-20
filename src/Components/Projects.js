import React from "react";
import "./Projects.css";
import image1 from './Images/projectImage1.png';
import image2 from './Images/projectImage2.png';
import image3 from './Images/chess.png';
import image4 from './Images/ProjectImage4.png';

const Projects = () => {
  const projects = [
    {
      name: "A simple resort",
      description: "This is a website that allows users to lodge during their vacation",
      image: image1,
      githubLink: "https://github.com/pavansai/reactBeachResort",
    },
    {
      name: "Let's PLAY",
      description: "CHESS",
      image: image3,
      githubLink: "https://github.com/pavansai/chessGame",
    },
    {
      name: "Twitter clone",
      description: "This is my full stack twitter clone built with Typescript and reactJs used MongoDB for database.",
      image: image2,
      githubLink: "https://github.com/your-username/twitter-clone",
    },
    {
      name: "Check Your Weather",
      description:"",
      image: image4,
      githubLink: "https://github.com/your-username/check-your-weather",
    },
  ];

  return (
    <div className="animated-paragraph" className="projects-container">
      <h1 className="animated-paragraph" >Projects</h1>
      <div className="animated-paragraph"  className="projects-grid">
        {projects.map((project, index) => (
          <div className="animated-paragraph" key={index} className="project-item">
            <img src={project.image} alt={project.name} className="animated-paragraph"/>
            <h3 className="animated-paragraph" >{project.name}</h3>
            <p className="animated-paragraph">{project.description}</p>
            <a className="animated-paragraph" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;