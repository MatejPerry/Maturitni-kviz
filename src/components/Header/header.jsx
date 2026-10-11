import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="home-header">
      <h2 className="home-logo">Maturitní kvíz</h2>

      <nav>
        <Link to="/">Domů</Link>
        <Link to="/about">O projektu</Link>
      </nav>
    </header>
  );
}