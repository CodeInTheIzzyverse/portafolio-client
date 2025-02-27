import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Courses from "./pages/Courses/Courses";
import Logo from "./components/Logo/Logo";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";

function App() {
    return (
        <>
            <Router>
                <Logo />
                <LanguageSwitch />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
