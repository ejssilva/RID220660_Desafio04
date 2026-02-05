import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <nav>
        <ul className="nav-links">
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
