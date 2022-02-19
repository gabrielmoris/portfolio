import "./aboutme.scss";
import { Down } from "../intro/Down";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faLinkedin,
    faGit,
    faGithub,
    faNodeJs,
    faReact,
    faAws,
    faFigma,
    faHtml5,
    faCss3,
    faJsSquare,
    faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Typescript } from "./Typescript";
import { PostgreSql } from "./Postgresql";
import { Jest } from "./Jest";
import { Redux } from "./Redux";
// import { JQuery } from "./JQuery";
import Board from "./Board";
import Tech from "./Tech";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
    const [techs, setTechs]: [string[], any] = useState([]);
    const [result, setResult]: [boolean, any] = useState(false);
    const [voted, setVoted]: [boolean, any] = useState(false);
    const [techGraf, setTechGraf]: [{ points: number; tech: string }[], any] =
        useState([]);
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const techCheck = (eachTech: string) => {
        setTechs([...techs, eachTech]);
    };

    Chart.register(...registerables);

    const technologies: string[] = [];
    const points: number[] = [];

    useEffect(() => {
        let abort = false;
        setTechGraf([]);
        fetch(`/votes`)
            .then((res) => res.json())
            .then((data) => {
                if (!abort) {
                    setTechGraf(data);
                }
            });
        return () => {
            abort = true;
        };
    }, [result, inView]);

    techGraf.forEach((element: { points: number; tech: string }) => {
        if (element.points === 0) {
            console.log("nope");
        } else {
            technologies.push(element.tech);
            points.push(element.points);
        }
    });

    const vote = (techs: string[]) => {
        fetch("/techs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(techs),
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.success === true) {
                    setResult(true);
                    techs.forEach((element: string) => {
                        technologies.push(element);
                        points.push(1);
                    });
                } else {
                    setVoted(true);
                }
            })
            .catch((err) => {
                console.log("Err in fetch /techs", err);
            });
    };

    return (
        <>
            <div className="aboutme" id="aboutme">
                <h1 className="title">About me</h1>
                <div className="body-aboutme">
                    <div className="left">
                        <div className="text-aboutme">
                            <p>
                                From the first moment I saw a "Hello World" in
                                the browser I took the decision of mastering
                                this magic and I joined a bootcamp. Always
                                trying to follow the DRY principle and write
                                clean and reusable code. <br />
                                With my experience as a teacher and musician I
                                learn how to explain complex terms in a simple
                                way and find solutions with creativity.
                            </p>

                            <a
                                className="my-button"
                                href="https://onionimageboard.s3.amazonaws.com/portfolio/CV+GABRIEL+H.pdf"
                                download
                                target="_blank"
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

                    <div className="right" ref={ref}>
                        <h1>Your opinion is very important.</h1>
                        <div className="right-out">
                            <h3>
                                Drag to the right the most interesting
                                technologies of my stack and click vote:
                            </h3>
                            <button
                                className="my-button"
                                onClick={() => {
                                    vote(techs);
                                }}
                            >
                                Vote
                            </button>
                            <div className="vote-title-btn">
                                {result && (
                                    <h3
                                        className="result-vote"
                                        style={{
                                            color: "rgba(0, 0, 0, 0.5)",
                                            zIndex: 20000,
                                        }}
                                    >
                                        Success!
                                    </h3>
                                )}
                                {voted && (
                                    <h3
                                        className="result-vote"
                                        style={{
                                            color: "rgba(0, 0, 0, 0.5)",
                                            zIndex: 20000,
                                        }}
                                    >
                                        you already voted!
                                    </h3>
                                )}
                            </div>
                            <div className="boards">
                                <Board id="board-1" className="board">
                                    <Tech
                                        id="html5"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faHtml5}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">HTML5</p>
                                    </Tech>
                                    <Tech
                                        id="css3"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCss3}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">CSS3</p>
                                    </Tech>
                                    <Tech
                                        id="javascript"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faJsSquare}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">JavaScript</p>
                                    </Tech>
                                    {/* <Tech
                                        id="jquery"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <JQuery />
                                        <p className="icon-text">JQuery</p>
                                    </Tech> */}
                                    <Tech
                                        id="git"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGit}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">Git</p>
                                    </Tech>
                                    <Tech
                                        id="github"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">GitHub</p>
                                    </Tech>
                                    <Tech
                                        id="nodejs-express"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faNodeJs}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">
                                            NodeJs & Express
                                        </p>
                                    </Tech>
                                    <Tech
                                        id="figma"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFigma}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">Figma</p>
                                    </Tech>
                                    <Tech
                                        id="typescript"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <Typescript />
                                        <p className="icon-text">Typescript</p>
                                    </Tech>
                                    <Tech
                                        id="postgresql"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <PostgreSql />
                                        <p className="icon-text">PostgreSQL</p>
                                    </Tech>
                                    <Tech
                                        id="vuejs"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faVuejs}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">Vue.js</p>
                                    </Tech>
                                    <Tech
                                        id="jest"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <Jest />
                                        <p className="icon-text">Jest</p>
                                    </Tech>
                                    <Tech
                                        id="react"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faReact}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">React</p>
                                    </Tech>
                                    <Tech
                                        id="redux"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <Redux />
                                        <p className="icon-text">Redux</p>
                                    </Tech>
                                    <Tech
                                        id="aws"
                                        className="icon"
                                        draggable="true"
                                    >
                                        <FontAwesomeIcon
                                            icon={faAws}
                                        ></FontAwesomeIcon>
                                        <p className="icon-text">
                                            Amazon Web Service
                                        </p>
                                    </Tech>
                                </Board>
                                <p className="between-board-arrow">➡</p>
                                <Board
                                    id="board2"
                                    className="board"
                                    techCheck={techCheck}
                                ></Board>
                            </div>
                        </div>
                        <h2>Results</h2>
                        <div className="bar">
                            {technologies.length > 1 && (
                                <Bar
                                    data={{
                                        labels: technologies,
                                        datasets: [
                                            {
                                                label: "Favourite Technologies",
                                                data: points,
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.5)",
                                            },
                                        ],
                                    }}
                                    options={{}}
                                ></Bar>
                            )}
                        </div>
                        <h1 className="phone">Use your computer to vote!</h1>
                    </div>
                </div>
            </div>
            <a className="arrow-opinions" href="#opinions">
                <Down />
            </a>
        </>
    );
}
