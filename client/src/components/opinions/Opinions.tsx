import "./opinions.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { useState, useEffect } from "react";
import { Typescript } from "./Typescript";
import { PostgreSql } from "./Postgresql";
import { Jest } from "./Jest";
import { Redux } from "./Redux";
import { JQuery } from "./JQuery";
import Board from "./Board";
import Tech from "./Tech";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Down } from "../intro/Down";
import { useInView } from "react-intersection-observer";

export default function Opinions() {
    const [techs, setTechs]: [any, any] = useState([]);
    const [result, setResult]: [boolean, any] = useState(false);
    const [voted, setVoted]: [boolean, any] = useState(false);
    const [techGraf, setTechGraf]: [any, any] = useState([]);
     const { ref, inView } = useInView({
         threshold: 0.2,
     });

    const techCheck = (eachTech: string) => {
        setTechs([...techs, eachTech]);
    };

    Chart.register(...registerables);

    const technologies: any = [];
    const points: any = [];

    useEffect(() => {
        let abort = false;
        setTechGraf([])
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
    }, [result,inView]);    

    techGraf.forEach((element: any) => {
        if (element.points===0){
            console.log("nope");
        }else{
        technologies.push(element.tech);
        points.push(element.points);}
    });

    console.log("TECHS ONLY", technologies, points);

    const vote = (techs: any) => {
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
                    techs.forEach((element:any) => {
                        technologies.push(element);
                        points.push(1);
                    });
                } else {
                    setVoted(true)
                }
            })
            .catch((err) => {
                console.log("Err in fetch /techs", err);
            });
    };

    return (
        <div className="opinions" id="opinions">
            <div className="left" ref={ref}>
                <h1>Your opinion is very important.</h1>
                {technologies.length>1 && (
                    <Bar
                        className="bar"
                        data={{
                            labels: technologies,
                            datasets: [
                                {
                                    label: "Favourite Technologies",
                                    data: points,
                                    backgroundColor: "#085ca670",
                                },
                            ],
                        }}
                        options={{}}
                    ></Bar>
                )}
                <a className="arrow-contact" href="#contact">
                    <Down />
                </a>
            </div>

            <div className="right-out">
                <div className="vote-title-btn">
                    <h2>
                        Drag to the right the most interesting technologies of
                        my stack and click vote:
                    </h2>
                    {result && (
                        <h3 style={{ color: "#085ca670", zIndex: 20000 }}>
                            Success!
                        </h3>
                    )}
                    {voted && (
                        <h3 style={{ color: "#085ca690", zIndex: 20000 }}>
                            you already voted!
                        </h3>
                    )}
                    <button
                        onClick={() => {
                            vote(techs);
                        }}
                    >
                        Vote
                    </button>
                </div>
                <div className="right">
                    <Board id="board-1" className="board">
                        <Tech id="html5" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                            <p className="icon-text">HTML5</p>
                        </Tech>
                        <Tech id="css3" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                            <p className="icon-text">CSS3</p>
                        </Tech>
                        <Tech id="javascript" className="icon" draggable="true">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                            ></FontAwesomeIcon>
                            <p className="icon-text">JavaScript</p>
                        </Tech>
                        <Tech id="jquery" className="icon" draggable="true">
                            <JQuery />
                            <p className="icon-text">JQuery</p>
                        </Tech>
                        <Tech id="git" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
                            <p className="icon-text">Git</p>
                        </Tech>
                        <Tech id="github" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p className="icon-text">GitHub</p>
                        </Tech>
                        <Tech
                            id="nodejs-express"
                            className="icon"
                            draggable="true"
                        >
                            <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                            <p className="icon-text">NodeJs & Express</p>
                        </Tech>
                        <Tech id="aws" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
                            <p className="icon-text">Amazon Web Service</p>
                        </Tech>
                        <Tech id="figma" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
                            <p className="icon-text">Figma</p>
                        </Tech>
                        <Tech id="typescript" className="icon" draggable="true">
                            <Typescript />
                            <p className="icon-text">Typescript</p>
                        </Tech>
                        <Tech id="postgresql" className="icon" draggable="true">
                            <PostgreSql />
                            <p className="icon-text">PostgreSQL</p>
                        </Tech>
                        <Tech id="vuejs" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
                            <p className="icon-text">Vue.js</p>
                        </Tech>
                        <Tech id="jest" className="icon" draggable="true">
                            <Jest />
                            <p className="icon-text">Jest</p>
                        </Tech>
                        <Tech id="react" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                            <p className="icon-text">React</p>
                        </Tech>
                        <Tech id="redux" className="icon" draggable="true">
                            <Redux />
                            <p className="icon-text">Redux</p>
                        </Tech>
                    </Board>
                    <Board
                        id="board2"
                        className="board"
                        techCheck={techCheck}
                    ></Board>
                </div>
            </div>
        </div>
    );
}