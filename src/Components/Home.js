import React, { useEffect } from "react";
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const consoleContainer = document.querySelector('.name-animation');
    const textToAnimate = "PAVAN SAI";
    let i = 0;

    const startAnimation = () => {
      if (i < textToAnimate.length) {
        consoleContainer.innerHTML = textToAnimate.substring(0, i+1) + '<span class="console-underscore">&#95;</span>';
        i++;
        setTimeout(startAnimation, 350);
      }
    }

    startAnimation();
  }, []);

  return (
    <div className="home-container">
      <div className="intro-content">
        <h1>H!, I'M <span className="name-animation"></span></h1>
        <p className="animated-paragraph">a Software Engineer with 2.8 Yr of experience,</p>
        <div className="intro-text">
          <p className="animated-paragraph">I hold both Bachelor's and Master's degree in <span style={{fontWeight:'bold', color:'skyblue'}}> Computer Science</span>,  I am passionate about Backend and Full stack Development</p>
          
        </div>
        <div className="social-links">
          <a href="https://github.com/pavansai"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pavan-sai-chiru/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="secondary-content">
        <div className="second-intro-content">
          {/* <h2>Secondary Content</h2> */}
          <p className="animated-paragraph">With my acedamic projects , I've gained understanding on building web applications that prioritize functionality. This hands-on experience honed by front end technologies. </p>
          <p className="animated-paragraph" > My full time work experience includes building backend applications with <span style={{fontWeight: 'bold', color: 'skyblue'}}> Java, Spring Boot, RESTFULL API's, GraphQL,</span> </p>
          <p className="animated-paragraph">I was also involved in Full stack Development, and various life cycles of a Software projects that include designing webpages, deployment, integration and updating functionalities. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;