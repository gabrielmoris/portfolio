import "./aboutme.scss";
import { Down } from "../intro/Down";

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <h1>ABOUT ME: comming soon</h1>

            <iframe
                src="https://giphy.com/embed/JIX9t2j0ZTN9S"
                width="480"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
            <a className="arrow-opinions" href="#opinions">
                <Down />
            </a>
        </div>
    );
}
