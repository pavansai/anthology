import React from "react";
import "./Projects.css";
import image1 from './Images/projectImage1.png';
import image2 from './Images/projectImage2.png';
import image3 from './Images/chess.png';
import image4 from './Images/ProjectImage4.png';
import image5 from './Images/deploy.png';

const Projects = () => {
  const projects = [
    {
      name: "A simple resort",
      description: "This is a website that allows users to lodge during their vacation",
      image: image1,
      githubLink: "https://updatedresort.vercel.app/",
      deployedLink: "https://updatedresort.vercel.app/",
    },
    {
      name: "Let's PLAY",
      description: "CHESS",
      image: image3,
      githubLink: "https://chess-wine-seven.vercel.app/",
    },
    {
      name: "Twitter clone",
      description: "This is my full stack twitter clone built with Typescript and reactJs used MongoDB for database.",
      image: image2,
      githubLink: "https://github.com/your-username/twitter-clone",
      deployedLink: "https://example.com/twitter-clone",
    },
    {
      name: "Check Your Weather",
      description: "",
      image: image4,
      githubLink: "https://github.com/your-username/check-your-weather",
      deployedLink: "https://example.com/weather",
    },
  ];

  return (
    <div className="animated-paragraph projects-container">
      <h1 className="animated-paragraph">Projects</h1>
      <div className="animated-paragraph projects-grid">
        {projects.map((project, index) => (
          <div className="animated-paragraph project-item" key={index}>
            <img src={project.image} alt={project.name} className="animated-paragraph" />
            <h3 className="animated-paragraph">{project.name}</h3>
            <p className="animated-paragraph">{project.description}</p>
            <div className="project-links">
              <a
                className="animated-paragraph view-project"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;