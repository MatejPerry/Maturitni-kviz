import { Link } from "react-router-dom";
import "../../css/style.css"

export default function Header() {
  return (
    <header className="home-header">
      <h2 className="home-logo">Maturitní kvíz</h2>

      <nav>
        <Link to="/" className="header-link">Domů</Link>
        <Link to="/about" className="header-link">O projektu</Link>
      </nav>
    </header>
  );
}