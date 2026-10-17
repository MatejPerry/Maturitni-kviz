import { Link } from "react-router-dom"
import "../../css/style.css"
import "./Quiz.css"
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

export default function Quiz() {
  return (
    <>
      <div className="quiz">
        <Header />
        <h1>Quiz</h1>

        <Footer />
      </div>
    </>
  )
}
