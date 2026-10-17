import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <>
      <div className="home">

        <Header />

        <main>
          <section className="home-hero">
            <div className="home-hero-left">
              <p className="home-label">PŘÍPRAVA NA MATURITU</p>

              <h1>
                Ověřte si, co <span>opravdu umíte.</span>
              </h1>

              <p className="home-description">
                Procvičujte si maturitní otázky, sledujte své výsledky
                a připravte se na maturitu vlastním tempem.
              </p>

              <a href="/quiz" className="home-button">
                Začít procvičovat →
              </a>
            </div>

            <div className="home-hero-right">
              <h2>Obsah kvízu</h2>
            </div>

          </section>

          <section className="home-options">
            <h2>Co můžete dělat?</h2>

            <div className="home-cards">

              <a href="/quiz" className="home-card">
                <h3>Procvičování</h3>
                <p>Vyzkoušejte si své znalosti pomocí otázek.</p>
                <span>Začít →</span>
              </a>

              <a href="/results" className="home-card">
                <h3>Výsledky</h3>
                <p>Podívejte se, jak se vám v testech daří.</p>
                <span>Zobrazit →</span>
              </a>

              <a href="/history" className="home-card">
                <h3>Historie</h3>
                <p>Prohlédněte si své předchozí testy.</p>
                <span>Prohlédnout →</span>
              </a>

              <Link to="/about" className="home-card">
                <h3>O projektu</h3>
                <p>Zjistěte více o maturitním kvízu.</p>
                <span>Více informací →</span>
              </Link>
              {/* <a href="/about" className="home-card">
                <h3>O projektu</h3>
                <p>Zjistěte více o maturitním kvízu.</p>
                <span>Více informací →</span>
              </a> */}

            </div>
          </section>
        </main>

        <Footer />

      </div>
    </>
  );
}

export default Home;