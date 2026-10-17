
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header-menu">
      <h2 className="home-logo">
        <span style={{ color: "var(--text)" }}>
          Maturitní kvíz
        </span>
      </h2>

      <button
        // className="hamburger"
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        <Link to="/" className="header-link" onClick={closeMenu}>
          Domů
        </Link>
        <Link to="/about" className="header-link" onClick={closeMenu}>
          O projektu
        </Link>
        <Link to="/quiz" className="header-link" onClick={closeMenu}>
          Kvíz
        </Link>
        <Link to="/results" className="header-link" onClick={closeMenu}>
          Výsledky
        </Link>
        <Link to="/history" className="header-link" onClick={closeMenu}>
          Historie
        </Link>
      </nav>
    </header>
  );
}
