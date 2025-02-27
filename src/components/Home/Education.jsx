import "./Education.scss";
import { useState } from "react";
import EducationCourses from "./Education/EducationCourses";
import EducationUniversity from "./Education/EducationUniversity";
import { useTranslation } from "react-i18next";

function Educational() {
    const [selectOption, setSelectOption] = useState("Courses");
    const { t } = useTranslation();
    const { education } = t("home");
    const { title, options } = education;
    const { option1, option2 } = options;

    const handleSelectOption = (e) => {
        setSelectOption(e.target.innerText);
    };

    return (
        <section className="education">
            <h1>{title}</h1>

            <article className="education-container">
                <nav>
                    <ul>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === "Courses" ? "skill-active" : ""
                            }
                        >
                            {option1}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === "University"
                                    ? "skill-active"
                                    : ""
                            }
                        >
                            {option2}
                        </li>
                    </ul>
                </nav>

                {selectOption === "Courses" && <EducationCourses />}
                {selectOption === "University" && <EducationUniversity />}
            </article>
        </section>
    );
}

export default Educational;
