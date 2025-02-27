import PropTypes from "prop-types";
import "./ProjectCard.scss";

function ProjectCard({ name, date, description, languages, link }) {
    return (
        <div className="project-card">
            <img
                src="./public/assets/img/projectCard.png"
                alt={`${name} project`}
            />

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
                    <img
                        src="./public/assets/ico/ProjectCard/openInNew.svg"
                        alt="Open in new tab"
                    />
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
