import "./Skills.scss";
import { useEffect, useState } from "react";
import SkillsLanguages from "./Skills/SkillsLanguages";
import SkillsTools from "./Skills/SkillsTools";
import SkillsPersonal from "./Skills/SkillsPersonal";
import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();
    const { skills } = t("home");
    const { title, options } = skills;
    const { languages, tools, personal } = options;
    const [selectOption, setSelectOption] = useState(languages);

    useEffect(() => {
        setSelectOption(languages);
    }, [languages]);

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
                                selectOption === languages ? "skill-active" : ""
                            }
                        >
                            {languages}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === tools ? "skill-active" : ""
                            }
                        >
                            {tools}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === personal ? "skill-active" : ""
                            }
                        >
                            {personal}
                        </li>
                    </ul>
                </nav>

                {selectOption === languages && <SkillsLanguages />}
                {selectOption === tools && <SkillsTools />}
                {selectOption === personal && <SkillsPersonal />}
            </article>
        </section>
    );
}

export default Skills;
