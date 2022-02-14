import "./aboutme.scss";
import { Down } from "../intro/Down";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <h1 className="title">About me</h1>
            <div className="body-aboutme">
                <div className="left">
                    <div className="text-aboutme">
                        <p>
                            From the first moment I saw a "Hello World" in the
                            browser I took the decision of mastering this magic
                            and I joined a bootcamp. Always trying to follow the
                            DRY principle and write clean and reusable code.
                            With my experience as a teacher and musician I learn
                            how to explain complex terms in a simple way and
                            find solutions with creativity.
                        </p>

                        <a
                            className="my-button"
                            href="https://onionimageboard.s3.amazonaws.com/portfolio/CV+GABRIEL+H.pdf"
                            download target="_blank"
                        >
                            Download my resume
                        </a>
                    </div>
                    <div className="icons">
                        <a
                            href="https://github.com/gabrielmoris"
                            target="_blank"
                            className="github"
                        >
                            <FontAwesomeIcon
                                icon={faGithubSquare}
                            ></FontAwesomeIcon>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/gabrielcmoris/"
                            target="_blank"
                            className="linkedin"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                            ></FontAwesomeIcon>
                        </a>

                        <a href="#contact" className="envelope">
                            <FontAwesomeIcon
                                icon={faEnvelopeSquare}
                            ></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="resume"></div>
                </div>
            </div>
            <a className="arrow-opinions" href="#opinions">
                <Down />
            </a>
        </div>
    );
}
