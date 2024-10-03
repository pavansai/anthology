import React, { useEffect } from "react";
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const consoleContainer = document.querySelector('.name-animation');
    const textToAnimate = "pavan sai";
    let i = 0;

    const startAnimation = () => {
      if (i < textToAnimate.length) {
        consoleContainer.innerHTML = textToAnimate.substring(0, i + 1) + '<span class="console-underscore">&#95;</span>';
        i++;
        setTimeout(startAnimation, 350);
      }
    };
    startAnimation();
  }, []);

  return (
    <div className="home-container">
      <div className="intro-content">
        <h1>Hello, I'm <span className="name-animation"></span></h1>
        <p className="animated-paragraph">
          A full stack engineer with <span style={{ fontWeight: 'bold', color: 'brown' }}>over five years</span> of experience,
        </p>
        <div className="intro-text">
          <p className="animated-paragraph">
            With both Bachelor's and Master's degrees in 
            <span style={{ fontWeight: 'bold', color: 'brown' }}> Computer Science</span>, over the last 
            <span style={{ fontWeight: 'bold', color: 'brown' }}> five years</span> I have worked on various Backend and Full Stack Development projects. My journey has involved designing scalable systems, implementing efficient APIs, and delivering robust software solutions. I am passionate about solving complex problems using 
            <span style={{ fontWeight: 'bold', color: 'brown' }}> Java, Spring Boot, GraphQL</span>, and other cutting-edge technologies.
          </p> 
        </div>
        <div className="social-links">
          <a href="https://github.com/pavansai"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pavansai66/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="secondary-content">
        <div className="second-intro-content">
          <p className="animated-paragraph">
            Currently, I am working as a <span style={{ fontWeight: 'bold', color: 'brown' }}> Java Full Stack Developer </span> at Windstream Holdings, where I am responsible for building and optimizing high-performance web applications. My role involves developing robust backend services using 
            <span style={{ fontWeight: 'bold', color: 'brown' }}> Java, Spring Boot, and GraphQL</span>, as well as designing <span style={{ fontWeight: 'bold', color: 'brown' }}> RESTful APIs</span> that support seamless integration with various systems.
          </p>
          <p className="animated-paragraph">
            I also collaborate closely with <span style={{ fontWeight: 'bold', color: 'brown' }}> front-end </span> teams to ensure the smooth delivery of features and functionalities, leveraging my expertise in full-stack development to provide end-to-end solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
