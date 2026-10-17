import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Quiz from "./Quiz"
import History from "./History"
import Results from "./Results"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/results" element={<Results />}/>
        </Routes>
    </BrowserRouter>
  )
}
