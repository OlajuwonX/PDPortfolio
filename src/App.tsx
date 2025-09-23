import { Routes, Route } from "react-router"
import './App.css'
import Home from "./pages/home"
import Nav from "./components/nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import Popup from "./components/ui/popup";

const App = () => {
    return (
        <div className="scroll-smooth">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Popup />
            <Footer />
        </div>
    )
}
export default App
