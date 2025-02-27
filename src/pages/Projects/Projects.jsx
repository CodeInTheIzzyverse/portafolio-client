import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Project.scss";
import ProjectCard from "../../components/Projects/ProjectCard";

const projects = [
    {
        id: 1,
        name: "May Pet",
        date: "2025-12-06",
        description: "Pet's shop",
        languages: ["HTML", "CSS", "ReactJS", "NodeJS"],
        link: "https://maypet.com",
    },
    {
        id: 2,
        name: "Project 2",
        date: "2025-11-06",
        description: "Another project",
        languages: ["HTML", "CSS", "ReactJS"],
        link: "https://project2.com",
    },
    {
        id: 3,
        name: "Project 3",
        date: "2025-10-06",
        description: "Yet another project",
        languages: ["HTML", "CSS", "NodeJS"],
        link: "https://project3.com",
    },
    {
        id: 4,
        name: "Calculator",
        date: "2025-12-06",
        description: "Yet another project",
        languages: ["HTML", "CSS", "ReactJS", "NodeJS"],
        link: "https://project4.com",
    },
    {
        id: 5,
        name: "Project 5",
        date: "2025-11-06",
        description: "Another project",
        languages: ["HTML", "CSS", "ReactJS"],
        link: "https://project5.com",
    },
    {
        id: 6,
        name: "Project 6",
        date: "2025-10-06",
        description: "Yet another project",
        languages: ["HTML", "CSS", "NodeJS"],
        link: "https://project6.com",
    },
];

const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Otros",
];

function Project() {
    const { t } = useTranslation();
    const { title, checkbox } = t("projects");
    const carouselRef = useRef(null);
    const scrollAmount = 350;
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const updateArrows = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= scrollAmount;
            setTimeout(updateArrows, 300);
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += scrollAmount;
            setTimeout(updateArrows, 300);
        }
    };

    const handleSelectLanguages = (e) => {
        const language = e.target.textContent; // Obtener el texto del span
        setSelectedLanguages(
            (prevSelected) =>
                prevSelected.includes(language)
                    ? prevSelected.filter((lang) => lang !== language) // Si ya está, lo eliminamos
                    : [...prevSelected, language] // Si no está, lo agregamos
        );
    };

    useEffect(() => {
        const handleScroll = () => updateArrows();

        const handleWheel = (event) => {
            if (carouselRef.current) {
                event.preventDefault();
                carouselRef.current.scrollLeft += event.deltaY * 2;
            }
        };

        const carousel = carouselRef.current;
        carousel.addEventListener("scroll", handleScroll);
        carousel.addEventListener("wheel", handleWheel, { passive: false });

        updateArrows(); // Llamamos para actualizar al inicio

        return () => {
            carousel.removeEventListener("scroll", handleScroll);
            carousel.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <main className="projects">
            <h1>{title}</h1>

            <section className="projects-content">
                <article className="projects-options">
                    <form>
                        <div className="tags-selector">
                            {tags.map((lang) => (
                                <span
                                    key={lang}
                                    className={
                                        selectedLanguages.includes(lang)
                                            ? "selected"
                                            : ""
                                    }
                                    onClick={handleSelectLanguages}
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>

                        <label>
                            <input type="checkbox" />
                            {checkbox}
                        </label>
                    </form>
                </article>

                <article className="projects-slider">
                    <img
                        className={`projects-arrow ${
                            !canScrollLeft ? "disabled" : ""
                        }`}
                        src="./public/assets/ico/Extra/ArrowBack.svg"
                        onClick={handlePrevClick}
                        style={{
                            opacity: canScrollLeft ? 1 : 0.5,
                            pointerEvents: canScrollLeft ? "auto" : "none",
                        }}
                    />
                    <div className="projects-carousel" ref={carouselRef}>
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <ProjectCard
                                    name={project.name}
                                    date={project.date}
                                    description={project.description}
                                    languages={project.languages}
                                    link={project.link}
                                />
                            </div>
                        ))}
                    </div>
                    <img
                        className={`projects-arrow ${
                            !canScrollRight ? "disabled" : ""
                        }`}
                        src="./public/assets/ico/Extra/ArrowForward.svg"
                        onClick={handleNextClick}
                        style={{
                            opacity: canScrollRight ? 1 : 0.5,
                            pointerEvents: canScrollRight ? "auto" : "none",
                        }}
                    />
                </article>
            </section>
        </main>
    );
}

export default Project;
