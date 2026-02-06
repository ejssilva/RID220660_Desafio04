import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaShieldAlt } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "ReactJS", icon: <FaReact className="skill-icon react" /> },
    { name: "Compliance", icon: <FaShieldAlt className="skill-icon compliance" /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Habilidades</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
