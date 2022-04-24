import "./aboutme.scss";
import { Down } from "../intro/Down";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
        <>
            <div className="aboutme" id="aboutme">
                <h1 className="title">About me</h1>
                <div className="body-aboutme">
                    <div className="wrap">
                        <div className="text-aboutme">
                            <p>
                                From the first moment, I saw a "Hello World" in
                                the browser I took upon myself the challenge of
                                mastering the intricacies of the magic world of
                                computer science. That was when I decided to
                                join a boot camp and started my journey. I
                                always do my best to follow the DRY principle
                                and write clean and reusable code.
                                <br /> <br />
                                Thanks to my experience as a teacher and a
                                musician, I am a specialist in conveying and
                                simplifying complex concepts and ideas. I also
                                consider myself a creative person who loves
                                challenges and finds a solution for any setback
                                that may arise along the way.
                            </p>

                            <a
                                className="my-button"
                                href="https://onionimageboard.s3.amazonaws.com/portfolio/CVH1.pdf"
                                download
                                target="_blank"
                            >
                                Download my CV in English
                            </a>
                            <a
                                className="my-button"
                                href="https://onionimageboard.s3.amazonaws.com/portfolio/CVDE.pdf"
                                download
                                target="_blank"
                            >
                                Download my CV in German
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
                </div>
                <a className="arrow-opinions" href="#contact">
                    <Down />
                </a>
            </div>
        </>
    );
}
