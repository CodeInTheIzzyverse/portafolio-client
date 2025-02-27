import "./LanguageSwitch.scss";
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "en",
        lang: "English",
    },
    {
        code: "es",
        lang: "Spanish",
    },
    {
        code: "it",
        lang: "Italian",
    },
];

function LanguageSwitch() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <select
            className="language-switch"
            onChange={handleChange}
            value={i18n.language}
        >
            {languages.map(({ code, lang }) => (
                <option key={code} value={code}>
                    {lang}
                </option>
            ))}
        </select>
    );
}

export default LanguageSwitch;
