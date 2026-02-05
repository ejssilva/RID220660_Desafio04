import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = () => {
      const data = [
        {
          id: 1,
          title: "Portal de Questões (provaFoco)",
          description: "Portal de questões para concursos, desenvolvido para auxiliar estudantes na preparação para provas.",
          image: "https://placehold.co/246x180/142850/FFFFFF?text=ProvaFoco",
          year: "2026",
          type: "Full Stack",
          link: "https://github.com/ejssilva/provaFoco"
        },
        {
          id: 2,
          title: "Desafio 01 - DNC",
          description: "Projeto desenvolvido como parte do primeiro desafio da formação em Tecnologia da Escola DNC.",
          image: "https://placehold.co/246x180/FF6464/FFFFFF?text=Desafio+01",
          year: "2025",
          type: "Front-end",
          link: "https://github.com/ejssilva/RID220660_Desafio01"
        },
        {
          id: 3,
          title: "Desafio 02 - DNC",
          description: "Projeto desenvolvido como parte do segundo desafio da formação em Tecnologia da Escola DNC.",
          image: "https://placehold.co/246x180/21243D/FFFFFF?text=Desafio+02",
          year: "2025",
          type: "Front-end",
          link: "https://github.com/ejssilva/RID220660_Desafio02"
        }
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects container">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project-item">
            <div className="project-img-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-img" />
              </a>
            </div>
            <div className="project-details">
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {project.title}
                </a>
              </h3>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
