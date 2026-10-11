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
        <h1>About</h1>
        {/* <Link to="/">Home</Link> */}

        <Footer />
      </div>
    </>
  )
}
