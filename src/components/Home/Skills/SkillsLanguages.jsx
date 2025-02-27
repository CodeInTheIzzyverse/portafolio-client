// imgs
import html from "/assets/ico/Languages/html.svg";
import css from "/assets/ico/Languages/css.svg";
import javascript from "/assets/ico/Languages/javascript.svg";
import markdown from "/assets/ico/Languages/markdown.svg";
import reactjs from "/assets/ico/Languages/reactjs.svg";
import nodejs from "/assets/ico/Languages/nodejs.svg";

function SkillsLanguages() {
    return (
        <div className="skills-option skills-languages">
            <img src={html} />
            <img src={css} />
            <img src={javascript} />
            <img src={markdown} />
            <img src={reactjs} />
            <img src={nodejs} />
        </div>
    );
}

export default SkillsLanguages;
