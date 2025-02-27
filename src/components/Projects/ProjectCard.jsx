import PropTypes from "prop-types";
import "./ProjectCard.scss";

// imgs
import projectCardImg from "/assets/img/projectCard.png";
import OpenInNewIco from "../../assets/ico/ProjectCard/openInNew.svg?react";

function ProjectCard({ name, date, description, languages, link }) {
    return (
        <div className="project-card">
            <img src={projectCardImg} alt={`${name} project`} />

            <div className="project-info">
                <div className="project-header">
                    <h4>{name}</h4>
                    <p className="project-date">{date}</p>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-languages">
                    {languages.map((language, index) => (
                        <p key={index}>{language}</p>
                    ))}
                </div>
                <div className="project-link">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View project
                    </a>
                    <OpenInNewIco />
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProjectCard;
