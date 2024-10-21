import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';  // Import the CSS file

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <div>
          <h3>Let's Connect</h3>
          <p>If you want to get in touch, feel free to drop me a message below.</p>
        </div>
        <div>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="1c047091-e60e-49f1-8403-6f1d463dde9e" />
            <input required name="Name" placeholder="Name" type="text" />
            <input required name="Email" placeholder="Email" type="email" />
            <textarea required name="Message" placeholder="Message" rows="3"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vigneswaran-s-779ba92a0/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VJVigneswaran/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com/vj_vigneswaran" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:vigneswaranvalarmathy.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
