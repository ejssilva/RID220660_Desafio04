import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="social-links-footer">
          <a href="https://github.com/ejssilva" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/eduardosilva76b5a37b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright ©2030 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
