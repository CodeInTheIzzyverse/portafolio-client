import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="active">
                    <Link to="/">
                        <img
                            src="./public/assets/ico/Menu/home.svg"
                            alt="home"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <img
                            src="./public/assets/ico/Menu/projects.svg"
                            alt="projects"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <img
                            src="./public/assets/ico/Menu/courses.svg"
                            alt="courses"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <img
                            src="./public/assets/ico/Menu/contact.svg"
                            alt="contact"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
