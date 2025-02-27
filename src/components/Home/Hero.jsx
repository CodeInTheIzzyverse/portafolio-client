import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button";
import "./Hero.scss";
import cv from "../../assets/cv/cv.txt";

// imgs
import Izzy from "/assets/img/Izzy.jpg";
import { Link } from "react-router-dom";

function Hero() {
    const { t } = useTranslation();
    const { hero } = t("home");
    const { title, subtitle, description, button1, button2 } = hero;

    return (
        <section className="hero">
            <article className="hero_text">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <Button type="primary">
                    <Link to="/contact">{button1}</Link>
                </Button>
                <Button type="secondary">
                    <a href={cv} download="IsabelaBedoyaCV.txt">
                        {button2}
                    </a>
                </Button>
            </article>

            <article className="hero_logo">
                <img src={Izzy} alt="Izzy" />
            </article>
        </section>
    );
}

export default Hero;
