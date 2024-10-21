import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="content-section">
        {/* About Me Section */}
        <div className="card">
          <h2>ABOUT ME</h2>
          <p>
          Hey there! I'm Vigneswaran, a front-end developer who started this journey back in college. I've gotten pretty good with HTML, CSS, JavaScript, Bootstrap, Angular and React. I love using Visual Studio Code and Sublime Text for my coding adventures and showing off my projects on GitHub. I’ve also had fun working with Firebase to create custom APIs. And a special shoutout to ChatGPT for being an awesome sidekick in my learning journey. I'm always eager to dive into new tech and keep exploring!
          </p>
        </div>

        {/* Education Section with Timeline */}
        <div className="education card">
          <h2>EDUCATION</h2>
          <div className="timeline">
            {/* Education Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Bachelor of Science in Computer Science</h3>
                <p>Madras University</p>
                <p className="year" style={{ opacity: '0.5' }}>2020 - 2023</p>
                <p>Graduated with a degree in Computer Science.</p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>HSC - Computer Science</h3>
                <p>GBHSS, Chrompet</p>
                <p className="year" style={{ opacity: '0.5' }}>2018 - 2020</p>
                <p>Studied Computer Science with Mathematics.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>SSLC</h3>
                <p>SSM(Srimathi Sundaravalli Memorial School), Chrompet</p>
                <p className="year" style={{ opacity: '0.5' }}>2017 - 2018</p>
                <p>Studied Computer Science with Mathematics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills card">
          <h2>SKILLS</h2>
          <div className="skill-icons">
            <div className="skill-icon html5">
              <FaHtml5 className="icon" />
              <div className="skill-percentage">90%</div>
            </div>
            <div className="skill-icon css3">
              <FaCss3Alt className="icon" />
              <div className="skill-percentage">80%</div>
            </div>
            <div className="skill-icon js">
              <FaJs className="icon" />
              <div className="skill-percentage">85%</div>
            </div>
            <div className="skill-icon angular">
              <FaAngular className="icon" />
              <div className="skill-percentage">75%</div>
            </div>
            <div className="skill-icon react">
              <FaReact className="icon" />
              <div className="skill-percentage">80%</div>
            </div>
          </div>
        </div>
         {/* Certifications Section */}
         <div className="certifications card">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {/* Certificate 1 */}
            <div className="certificate-item">
              <img 
                src="/images/certificates/certificate1.jpg" 
                alt="Certification 1" 
                className="certificate-img"
              />
              <div className="certificate-info">
                <h4>Front-End Web Developement(Angular Framework)</h4>
                <p>Anjali Computer Education</p>
                <p>Jun'2023 - Sep'2023</p>
              </div>
            </div>
            {/* Certificate 2 */}
            <div className="certificate-item">
              <img 
                src="/images/certificates/certificate2.png" 
                alt="Certification 2" 
                className="certificate-img"
              />
              <div className="certificate-info">
                <h4>Legacy JavaScript Algorithms and Data Structures </h4>
                <p>FreeCodeCamp</p>
                <p>October 7, 2024</p>
              </div>
            </div>
            {/* Add more certificates as needed */}
            <div className="certificate-item">
              <img 
                src="/images/certificates/certificate3.jpg" 
                alt="Certification 3" 
                className="certificate-img"
              />
              <div className="certificate-info">
                <h4> </h4>
                <p>FreeCodeCamp</p>
                <p>October 8, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
