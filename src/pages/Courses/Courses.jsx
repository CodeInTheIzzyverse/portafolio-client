import { useTranslation } from "react-i18next";
import "./Courses.scss";

function Courses() {
    const { t } = useTranslation();
    const { title } = t("courses");

    return (
        <main className="courses">
            <section>
                <h1>{title}</h1>

                <article>
                    <img src="./public/assets/ico/Extra/ArrowBack.svg" />
                    <div>
                        <p>Web Basics</p>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <img src="./public/assets/ico/Languages/css.svg" />
                            <img src="./public/assets/ico/Languages/javascript.svg" />
                        </div>
                    </div>

                    <div>
                        <p>Web Basics</p>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <img src="./public/assets/ico/Languages/css.svg" />
                            <img src="./public/assets/ico/Languages/javascript.svg" />
                        </div>
                    </div>

                    <div>
                        <p>Web Basics</p>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <img src="./public/assets/ico/Languages/css.svg" />
                            <img src="./public/assets/ico/Languages/javascript.svg" />
                        </div>
                    </div>

                    <div>
                        <p>Web Basics</p>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <img src="./public/assets/ico/Languages/css.svg" />
                            <img src="./public/assets/ico/Languages/javascript.svg" />
                        </div>
                    </div>
                    <img src="./public/assets/ico/Extra/ArrowForward.svg" />
                </article>
            </section>

            <section>
                <h1>{"Learning Paths > Web Basics"}</h1>

                <article>
                    <img src="./public/assets/ico/Extra/ArrowBack.svg" />
                    <div>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <div>
                                <p>HTML</p>
                                <p>Basic to advanced</p>
                            </div>
                        </div>
                        <div>
                            <img src="./public/assets/ico/CourseCard/Watch.svg" />
                            <img src="./public/assets/ico/CourseCard/Code.svg" />
                            <img src="./public/assets/ico/CourseCard/Docs.svg" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <div>
                                <p>HTML</p>
                                <p>Basic to advanced</p>
                            </div>
                        </div>
                        <div>
                            <img src="./public/assets/ico/CourseCard/Watch.svg" />
                            <img src="./public/assets/ico/CourseCard/Code.svg" />
                            <img src="./public/assets/ico/CourseCard/Docs.svg" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <div>
                                <p>HTML</p>
                                <p>Basic to advanced</p>
                            </div>
                        </div>
                        <div>
                            <img src="./public/assets/ico/CourseCard/Watch.svg" />
                            <img src="./public/assets/ico/CourseCard/Code.svg" />
                            <img src="./public/assets/ico/CourseCard/Docs.svg" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="./public/assets/ico/Languages/html.svg" />
                            <div>
                                <p>HTML</p>
                                <p>Basic to advanced</p>
                            </div>
                        </div>
                        <div>
                            <img src="./public/assets/ico/CourseCard/Watch.svg" />
                            <img src="./public/assets/ico/CourseCard/Code.svg" />
                            <img src="./public/assets/ico/CourseCard/Docs.svg" />
                        </div>
                    </div>
                    <img src="./public/assets/ico/Extra/ArrowForward.svg" />
                </article>
            </section>
        </main>
    );
}

export default Courses;
