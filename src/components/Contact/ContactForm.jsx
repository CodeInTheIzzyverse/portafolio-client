import PropTypes from "prop-types";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

const initialForm = {
    name: "",
    email: "",
    message: "",
};

function ContactForm({ handleShowForm }) {
    const { t } = useTranslation();
    const { form } = t("contact");
    const { Name, Email, Message, SendButton, InfoButton } = form;
    const refForm = useRef();

    const [formData, setFormData] = useState(initialForm);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_8top8hu";
        const templateId = "template_t51vqyq";
        const publicKey = "TaGDlcXgdm5e7G00j";

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted", formData);
            setErrors({});
            emailjs
                .sendForm(serviceId, templateId, refForm.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        console.log("SUCCESS!");
                        setFormData(initialForm);
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };

    return (
        <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        name="name"
                        placeholder={Name}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className="error-tooltip">{errors.name}</span>
                    )}
                </div>

                <div className="input-wrapper">
                    <input
                        name="email"
                        placeholder={Email}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error-tooltip">{errors.email}</span>
                    )}
                </div>

                <div className="input-wrapper">
                    <textarea
                        name="message"
                        placeholder={Message}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <span className="error-tooltip">{errors.message}</span>
                    )}
                </div>

                <Button type="primary">{SendButton}</Button>
            </form>

            <Button type="secondary" onClick={handleShowForm}>
                {InfoButton}
            </Button>
        </div>
    );
}

ContactForm.propTypes = {
    handleShowForm: PropTypes.func.isRequired,
};

export default ContactForm;
