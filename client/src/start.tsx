import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParticlesBackground } from "./components/particles/ParticlesBackground";

ReactDOM.render(
    <React.StrictMode>
        <div
        // style={{
        //     backgroundImage: `url(./assets/background.svg)`,
        //     backgroundSize: `cover`,
        // }}
        >
            <ParticlesBackground />
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
