import { useState, useEffect } from "react";
import ProjectCard from "../Projects/ProjectCard";
import "./ProjectsIntro.scss";
import { useTranslation } from "react-i18next";

// imgs
import ArrowLeftIco from "../../assets/ico/Extra/ArrowBack.svg?react";
import ArrowRightIco from "../../assets/ico/Extra/ArrowForward.svg?react";

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

function ProjectsIntro() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [projectsToShow, setProjectsToShow] = useState(1);
    const { t } = useTranslation();
    const { projectsIntro } = t("home");
    const { title } = projectsIntro;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setProjectsToShow(3);
            } else if (window.innerWidth >= 768) {
                setProjectsToShow(2);
            } else {
                setProjectsToShow(1);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - projectsToShow : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - projectsToShow ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="recent-projects">
            <h1>{title}</h1>

            <article className="projects-slider">
                <ArrowLeftIco
                    className="projects-arrow"
                    onClick={handlePrevClick}
                />
                <div className="projects-carousel">
                    {projects
                        .slice(currentIndex, currentIndex + projectsToShow)
                        .map((project) => (
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
                <ArrowRightIco
                    className="projects-arrow"
                    onClick={handleNextClick}
                />
            </article>
        </section>
    );
}

export default ProjectsIntro;
