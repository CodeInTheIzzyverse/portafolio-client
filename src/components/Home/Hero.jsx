import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button";
import "./Hero.scss";
// imgs
import Izzy from "/assets/img/Izzy.jpg";

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
                <Button type="primary">{button1}</Button>
                <Button type="secondary">{button2}</Button>
            </article>

            <article className="hero_logo">
                <img src={Izzy} alt="Izzy" />
            </article>
        </section>
    );
}

export default Hero;
