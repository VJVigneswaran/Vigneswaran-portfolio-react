import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>PROJECTS</h2>
          <p>Here are some of my works.</p>
        </div>
        <div className="project-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img src="/images/project1.png" alt="ToDo App" />
            <div className="project-card-content">
              <h5>Todo App</h5>
              <p>Our app is designed to help you manage your weekly reminders effortlessly.</p>
              <div className="project-links">
                <a href="https://github.com/VJVigneswaran/ToDo-App" target="_blank" rel="noopener noreferrer" className="btn-view">View</a>
                <a href="https://todo-apk-2024.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-demo">Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src="/images/project2.png" alt="Random Quote Generator" />
            <div className="project-card-content">
              <h5>Random Quote Generator</h5>
              <p>This project demonstrates a random quote generator. A simple app to generate random quotes.</p>
              <div className="project-links">
                <a href="https://github.com/VJVigneswaran/Random-Quote-Generator" target="_blank" rel="noopener noreferrer" className="btn-view">View</a>
                <a href="https://random-quote-generator.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-demo">Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src="/images/project3.png" alt="Personal Portfolio" />
            <div className="project-card-content">
              <h5>Personal Portfolio</h5>
              <p>This project is my personal portfolio showcasing various web development projects. Built using Angular and Bootstrap Frameworks</p>
              <div className="project-links">
                <a href="https://github.com/VJVigneswaran/Portfolio" target="_blank" rel="noopener noreferrer" className="btn-view">View</a>
                <a href="https://vigneswaran-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-demo">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
