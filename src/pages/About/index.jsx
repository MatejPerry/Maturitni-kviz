import { Link } from "react-router-dom"
import "../../css/style.css"
import "./About.css"
import Header from "../../components/Header/header.jsx";

export default function About() {
  return (
    <>
    <Header />
    <h1>About</h1>
    <Link to="/">Home</Link>
    </>
  )
}
