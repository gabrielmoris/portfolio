import "./portfolio.scss";
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
import { useRef } from "react";
import { Typescript } from "./Typescript";
import { PostgreSql } from "./Postgresql";
import { Jest } from "./Jest";
import { Redux } from "./Redux";
import { JQuery } from "./JQuery";

export default function Portfolio() {
    const constraintsRef = useRef(null);

    return (
        <div className="portfolio" id="portfolio">
            <motion.div
                className="left"
                // initial={{ y: 0 }}
                // animate={{ rotate: 180 }}
                // transition={{ type: "spring", restSpeed: 0.5 }}
            >
                <h1>HOLA</h1>
            </motion.div>

            <motion.div className="right" ref={constraintsRef}>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                    <p className="icon-text">HTML5</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                    <p className="icon-text">CSS3</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
                    <p className="icon-text">JavaScript</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <JQuery />
                    <p className="icon-text">JQuery</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
                    <p className="icon-text">Git</p>
                </motion.div>{" "}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <p className="icon-text">GitHub</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    <p className="icon-text">NodeJs & Express</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
                    <p className="icon-text">Amazon Web Service</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
                    <p className="icon-text">Figma</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <Typescript />
                    <p className="icon-text">Typescript</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <PostgreSql />
                    <p className="icon-text">PostgreSQL</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
                    <p className="icon-text">Vue.js</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <Jest />
                    <p className="icon-text">Jest</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                    <p className="icon-text">React</p>
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="icon"
                >
                    <Redux />
                    <p className="icon-text">Redux</p>
                </motion.div>
            </motion.div>
        </div>
    );
}
