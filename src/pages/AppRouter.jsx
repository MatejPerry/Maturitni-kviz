import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    </BrowserRouter>
  )
}
