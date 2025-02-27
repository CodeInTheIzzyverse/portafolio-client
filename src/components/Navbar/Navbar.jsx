import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

// imgs
import HomeIco from "../../assets/ico/Navbar/home.svg?react";
import ProjectsIco from "../../assets/ico/Navbar/projects.svg?react";
import CoursesIco from "../../assets/ico/Navbar/courses.svg?react";
import ContactIco from "../../assets/ico/Navbar/contact.svg?react";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">
                        <HomeIco />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/projects" ? "active" : ""
                    }
                >
                    <Link to="/projects">
                        <ProjectsIco />
                    </Link>
                </li>
                <li
                    className={location.pathname === "/courses" ? "active" : ""}
                >
                    <Link to="/courses">
                        <CoursesIco />
                    </Link>
                </li>
                <li
                    className={location.pathname === "/contact" ? "active" : ""}
                >
                    <Link to="/contact">
                        <ContactIco />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
