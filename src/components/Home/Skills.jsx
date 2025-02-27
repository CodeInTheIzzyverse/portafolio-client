import "./Skills.scss";
import { useState } from "react";
import SkillsLanguages from "./Skills/SkillsLanguages";
import SkillsTools from "./Skills/SkillsTools";
import SkillsPersonal from "./Skills/SkillsPersonal";
import { useTranslation } from "react-i18next";

function Skills() {
    const [selectOption, setSelectOption] = useState("Languages");
    const { t } = useTranslation();
    const { skills } = t("home");
    const { title, options } = skills;
    const { languages, tools, personal } = options;

    const handleSelectOption = (e) => {
        setSelectOption(e.target.innerText);
    };

    return (
        <section className="skills">
            <h1>{title}</h1>
            <article className="skills-container">
                <nav>
                    <ul>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === "Languages"
                                    ? "skill-active"
                                    : ""
                            }
                        >
                            {languages}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === "Tools" ? "skill-active" : ""
                            }
                        >
                            {tools}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === "Personal"
                                    ? "skill-active"
                                    : ""
                            }
                        >
                            {personal}
                        </li>
                    </ul>
                </nav>

                {selectOption === "Languages" && <SkillsLanguages />}
                {selectOption === "Tools" && <SkillsTools />}
                {selectOption === "Personal" && <SkillsPersonal />}
            </article>
        </section>
    );
}

export default Skills;
