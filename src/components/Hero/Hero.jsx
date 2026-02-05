import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <h1>Olá, eu sou Eduardo<br />Desenvolvedor Full-stack</h1>
        <p>
          Sou Bacharel em Ciência da Computação, com Pós-Graduação em Cibersegurança, e atualmente estou em formação em Engenharia de Software pela Escola DNC. Possuo experiência na docência em cursos Técnicos em Informática, ministrando aulas nas áreas de Desenvolvimento Web e Cibersegurança.
          <br /><br />
          Meu perfil combina sólida base técnica, foco em segurança da informação e compromisso com boas práticas de engenharia de software, buscando sempre desenvolver soluções eficientes, escaláveis e seguras.
        </p>
        <button className="btn-resume">Download resumo</button>
      </div>
    </section>
  );
};

export default Hero;
