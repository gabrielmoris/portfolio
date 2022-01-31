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
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typescript } from "./Typescript";
import { PostgreSql } from "./Postgresql";
import { Jest } from "./Jest";
import { Redux } from "./Redux";
import { JQuery } from "./JQuery";
import Board from "./Board";
import Tech from "./Tech";

export default function Opinions() {
    const [techs, setTechs]:[any ,any] = useState([]);
    const [result, setResult]:[boolean ,any] = useState(false);
    const[graf, setGraf]:[any,any]=useState()

    const techCheck = (eachTech: string) => {
        setTechs([...techs, eachTech]);
        console.log("techs", techs);
    };

      useEffect(() => {
         let abort = false;
         fetch(`/votes`)
             .then((res) => res.json())
             .then((data) => {
                 if (!abort) {
                    //  setGraf(data);
                    console.log("data from graf",data)
                 }
             });
         return () => {
             abort = true;
         };
      }, []);

    const vote =(techs:any)=>{
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
                    setResult(true)
                } else {
                    return
                }
            })
            .catch((err) => {
                console.log("Err in fetch /techs", err);
            });
    }

    return (
        <div className="opinions" id="opinions">
            <div className="left">
                <h1>Your opinion is very important.</h1>
            </div>

            <div className="right-out">
                <div>
                    <h2>
                        Drag to the right the most interesting technologies of
                        my stack:
                    </h2>
                    {result&&<h3 style={{color:"#085ca670"}}>Success!</h3>}
                    <button onClick={()=>{vote(techs)}}>Vote</button>
                </div>
                <motion.div className="right">
                    <Board id="board-1" className="board">
                        <Tech id="html5" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                            <p className="icon-text">HTML5</p>
                        </Tech>
                        <Tech id="css3" className="icon" draggable="true">
                            <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
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
                </motion.div>
            </div>
        </div>
    );
}

//put inside of right
//  <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="html5"
//                     onClick={() => {
//                         setId("html5");
//                     }}
//                 >
//                     <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
//                     <p className="icon-text">HTML5</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="css3"
//                 >
//                     <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
//                     <p className="icon-text">CSS3</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="javascript"
//                 >
//                     <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
//                     <p className="icon-text">JavaScript</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="jquery"
//                 >
//                     <JQuery />
//                     <p className="icon-text">JQuery</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="git"
//                 >
//                     <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
//                     <p className="icon-text">Git</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="github"
//                 >
//                     <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
//                     <p className="icon-text">GitHub</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="nodejs-express"
//                 >
//                     <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
//                     <p className="icon-text">NodeJs & Express</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="aws"
//                 >
//                     <FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
//                     <p className="icon-text">Amazon Web Service</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="figma"
//                 >
//                     <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
//                     <p className="icon-text">Figma</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="typescript"
//                 >
//                     <Typescript />
//                     <p className="icon-text">Typescript</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="postgresql"
//                 >
//                     <PostgreSql />
//                     <p className="icon-text">PostgreSQL</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="vuejs"
//                 >
//                     <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
//                     <p className="icon-text">Vue.js</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="jest"
//                 >
//                     <Jest />
//                     <p className="icon-text">Jest</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="react"
//                 >
//                     <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
//                     <p className="icon-text">React</p>
//                 </motion.div>
//                 <motion.div
//                     drag
//                     dragConstraints={constraintsRef}
//                     className="icon"
//                     id="redux"
//                 >
//                     <Redux />
//                     <p className="icon-text">Redux</p>
//                 </motion.div>
