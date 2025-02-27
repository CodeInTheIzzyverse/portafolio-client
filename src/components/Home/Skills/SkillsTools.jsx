// imgs
import PowerPoint from "/assets/ico/Tools/PowerPoint.svg";
import Postman from "/assets/ico/Tools/Postman.svg";
import git from "/assets/ico/Tools/git.svg";

function SkillsTools() {
    return (
        <div className="skills-option skills-tools">
            <img src={PowerPoint} />
            <img src={Postman} />
            <img src={git} />
        </div>
    );
}

export default SkillsTools;
