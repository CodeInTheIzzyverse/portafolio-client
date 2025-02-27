import { useEffect, useState } from "react";
import "./Logo.scss";
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();

    const [keysPressed, setKeysPressed] = useState({
        Control: false,
        Alt: false,
        Shift: false,
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key in keysPressed) {
                setKeysPressed((prev) => ({ ...prev, [event.key]: true }));
            }
        };

        const handleKeyUp = (event) => {
            if (event.key in keysPressed) {
                setKeysPressed((prev) => ({ ...prev, [event.key]: false }));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [keysPressed]);

    const handleSecretClick = (event) => {
        if (keysPressed.Control && keysPressed.Alt && keysPressed.Shift) {
            event.preventDefault();
            navigate("/admin"); // Redirige al admin panel
        }
    };

    return (
        <div className="logo" onClick={handleSecretClick}>
            Izzy
        </div>
    );
}

export default Logo;
