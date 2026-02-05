import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Professor",
      date: "Jul/2025 - Atual",
      company: "Escola Estadual Sec. Tristão da Cunha",
      description: "Ministrar aulas do curso Técnico em Informática. Nas disciplinas de Programação Orientada a Objetos e Desenvolvimento Web (CSS, HTML, e Javascript)."
    },
    {
      id: 2,
      role: "Analista de Segurança de Informação",
      date: "Jul/2025 - Atual",
      company: "Prefeitura Municipal de Divisa Nova",
      description: "Implantação da Lei GPD, desenvolvimento e implantação de políticas de segurança, treinamentos para usuários. Monitorar e responder incidentes de segurança."
    },
    {
      id: 3,
      role: "Analista de Sistemas da Informação",
      date: "Ago/2024 - Mai/2025",
      company: "Prefeitura Municipal de Divisa Nova",
      description: "Suporte e treinamento e sistemas do SUS (BPA, FPO, SIA, SUSFácil, CNES). Rotina administrativas (Prestação de Contas). Atendimento ao público. Responsável em passar as demandas para o setor de desenvolvimento."
    }
  ];

  return (
    <section id="experience" className="experience-section container">
      <h2 className="section-title">Experiência Profissional</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-info">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-date">{exp.date}</div>
              <div className="experience-company">{exp.company}</div>
            </div>
            <div className="experience-description">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
