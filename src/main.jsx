import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <React.Suspense fallback="Loading...">
            <App />
        </React.Suspense>
    </StrictMode>
);
