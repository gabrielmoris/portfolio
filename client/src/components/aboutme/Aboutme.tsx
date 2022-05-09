import "./aboutme.scss";
import { Down } from "../intro/Down";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
        <>
            <div className="aboutme" id="aboutme">
                <h2 className="title">About me</h2>
                <div className="body-aboutme">
                    <div className="text-aboutme">
                        <p>
                            <b>Web Development Intern at Beehivve</b>
                            <br />
                            <br />
                            From the first moment, I saw a "Hello World" in the
                            browser I took upon myself the challenge of
                            mastering the world of the Web development. That was
                            when I decided to join a bootcamp and started my
                            journey. I always do my best to follow the DRY
                            principle and write clean and reusable code.
                            <br /> <br />
                            Thanks to my experience as a teacher and a musician,
                            I am a specialist in simplifying complex concepts
                            and ideas. I also consider myself a creative person
                            who loves challenges and finds a solution for any
                            setback that may arise along the way.
                        </p>
                        <div className="aboutmeBTNS">
                            <a
                                className="my-button"
                                href="https://onionimageboard.s3.amazonaws.com/portfolio/CVH1.pdf"
                                download
                                target="_blank"
                            >
                                CV in English
                            </a>
                            <a
                                className="my-button"
                                href="https://onionimageboard.s3.amazonaws.com/portfolio/CVDE.pdf"
                                download
                                target="_blank"
                            >
                                CV in German
                            </a>
                        </div>
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
                <a className="arrow-opinions" href="#contact">
                    <Down />
                </a>
            </div>
        </>
    );
}
