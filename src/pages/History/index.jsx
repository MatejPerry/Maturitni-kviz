import { Link } from "react-router-dom"
import "../../css/style.css"
import "./History.css"
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

export default function History() {
  return (
    <>
      <div className="history">
        <Header />
        <h1>History</h1>

        <Footer />
      </div>
    </>
  )
}
