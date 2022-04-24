import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <div
            style={{
                backgroundImage: `url(./assets/background.svg)`,
                backgroundSize: `cover`,
            }}
        >
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
