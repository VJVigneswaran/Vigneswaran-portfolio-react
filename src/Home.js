import React from 'react';
import { FaHandSparkles } from 'react-icons/fa';
import './Home.css';  // Import the Home CSS file

const Home = () => {
  return (
    <section id="home">
      <div>
        <div>
          <div>
            <p>Hi <FaHandSparkles  className="sparkle-effect" size={"60px"} />, I'm</p>
            <h2>Vigneswaran</h2>
            <p>
              I am a fresher and a self-learned frontend developer. I have a strong passion for creating interactive and responsive web applications. My goal is to continuously improve my skills and contribute to impactful projects.
            </p>
            <a href="assets/Vigneswaran.pdf" download="Vigneswaran.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Home;
