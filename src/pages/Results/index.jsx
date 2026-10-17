import { Link } from "react-router-dom"
import "../../css/style.css"
import "./Results.css"
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

export default function Results() {
  return (
    <>
      <div className="results">
        <Header />
        <h1>Results</h1>

        <Footer />
      </div>
    </>
  )
}