import "./Contact.scss";
import Button from "../../components/Buttons/Button";
import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Map from "../../components/Contact/Map";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    const { title, info } = t("contact");
    const { name, email, location, formButton } = info;
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <main className="contact">
            <h1>{title}</h1>

            {!showForm ? (
                <article className="contact-info">
                    <div className="info">
                        <pre>
                            {`{
    ${name}: Isabela Bedoya Gaviria;
    ${email}: dev.izzyverse@gmail.com;
    ${location}: Colombia
}`}
                        </pre>
                        <Button type="primary" onClick={handleShowForm}>
                            {formButton}
                        </Button>
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                </article>
            ) : (
                <ContactForm handleShowForm={handleShowForm} />
            )}
        </main>
    );
}

export default Contact;
