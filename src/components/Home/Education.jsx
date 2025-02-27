import "./Education.scss";
import { useEffect, useState } from "react";
import EducationCourses from "./Education/EducationCourses";
import EducationUniversity from "./Education/EducationUniversity";
import { useTranslation } from "react-i18next";

function Educational() {
    const { t } = useTranslation();
    const { education } = t("home");
    const { title, options } = education;
    const { option1, option2 } = options;
    const [selectOption, setSelectOption] = useState(option1);

    useEffect(() => {
        setSelectOption(option1);
    }, [option1]);

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
                                selectOption === option1 ? "skill-active" : ""
                            }
                        >
                            {option1}
                        </li>
                        <li
                            onClick={handleSelectOption}
                            className={
                                selectOption === option2 ? "skill-active" : ""
                            }
                        >
                            {option2}
                        </li>
                    </ul>
                </nav>

                {selectOption === option1 && <EducationCourses />}
                {selectOption === option2 && <EducationUniversity />}
            </article>
        </section>
    );
}

export default Educational;
