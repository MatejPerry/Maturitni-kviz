import { Link } from "react-router-dom";
import "../../css/style.css"

export default function Header() {
  return (
    <header className="header-menu">
      <h2 className="home-logo"><span style={{ color: 'var(--text)' }}>Maturitní kvíz</span></h2>

      <nav>
        <Link to="/" className="header-link">Domů</Link>
        <Link to="/about" className="header-link">O projektu</Link>
        <Link to="/quiz" className="header-link">Kvíz</Link>
      </nav>
    </header>
  );
}