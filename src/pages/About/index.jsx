import { Link } from "react-router-dom"
import "../../css/style.css"
import "./About.css"
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

export default function About() {
  return (
    <>
      <div className="about">
        <Header />

        <section className="about-hero">
          {/* <span className="home-label">O PROJEKTU</span>

          <br />
          <br /> */}

          <h1 className="page-title">O projektu Maturitní kvíz</h1>
          <p className="home-description">
            Webová aplikace, která pomáhá studentům s přípravou
            na maturitu prostřednictvím interaktivních kvízů.
          </p>
        </section>

        <br />

        <section className="about-section">
          <h2>O čem projekt je?</h2>
          <p>
            Cílem projektu je vytvořit aplikaci, ve které si
            studenti mohou ověřit a procvičit své znalosti.
            Kvíz nabízí otázky různých obtížností a přizpůsobuje
            se dosavadním výsledkům uživatele.
          </p>
        </section>

        <br />

        <section className="about-section">
          <h2>Co aplikace nabízí?</h2>

          <div className="home-cards">
            <div className="home-card">
              <h3>Interaktivní kvíz</h3>
              <p>
                Odpovídejte na otázky a procvičujte si své znalosti.
              </p>
            </div>

            <div className="home-card">
              <h3>Adaptivní obtížnost</h3>
              <p>
                Obtížnost otázek se mění podle Vaší úspěšnosti.
              </p>
            </div>

            <div className="home-card">
              <h3>Výsledky</h3>
              <p>
                Sledujte svou úspěšnost a vyhodnocujte své pokroky.
              </p>
            </div>

            <div className="home-card">
              <h3>Historie</h3>
              <p>
                Prohlížejte si své předchozí pokusy a výsledky.
              </p>
            </div>
          </div>
        </section>

        <br />

        <section className="about-section">
          <h2>Jak kvíz funguje?</h2>
          <p>
            Po spuštění kvízu uživatel postupně odpovídá na
            připravené otázky. Podle správnosti odpovědí se
            upravuje obtížnost dalších otázek. Na konci se
            zobrazí celkové vyhodnocení.
          </p>
        </section>

        <br />

        <section className="about-section">
          <h2>Použité technologie</h2>
          <p>
            Projekt je vytvořen pomocí knihovny React,
            programovacího jazyka JavaScript a stylovacího
            jazyka CSS. Pro navigaci mezi stránkami slouží
            React Router.
          </p>
        </section>

        <br />

        <Footer />
      </div>
    </>
  )
}
