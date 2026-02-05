import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaFigma } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3>Minha Jornada</h3>
            <p>
              Sou um desenvolvedor apaixonado por criar interfaces web intuitivas e dinâmicas. 
              Comecei minha jornada na programação através de desafios práticos como este, onde descobri 
              minha vocação para o Front-end.
            </p>
            <p>
              Com foco em React e ecossistema JavaScript, busco sempre as melhores práticas de 
              desenvolvimento e clean code. Atualmente estou aprofundando meus conhecimentos em 
              arquitetura de software e UX Design.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2024</span>
                <div className="content">
                  <h4>Formação DNC</h4>
                  <p>Desenvolvimento Full Stack & Carreira</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="year">2023</span>
                <div className="content">
                  <h4>Início dos Estudos</h4>
                  <p>Lógica de programação e fundamentos Web</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <h3>Habilidades</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <FaReact className="skill-icon react" />
                <span>React</span>
              </div>
              <div className="skill-card">
                <FaJs className="skill-icon js" />
                <span>JavaScript</span>
              </div>
              <div className="skill-card">
                <FaHtml5 className="skill-icon html" />
                <span>HTML5</span>
              </div>
              <div className="skill-card">
                <FaCss3 className="skill-icon css" />
                <span>CSS3</span>
              </div>
              <div className="skill-card">
                <FaGitAlt className="skill-icon git" />
                <span>Git</span>
              </div>
              <div className="skill-card">
                <FaFigma className="skill-icon figma" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
