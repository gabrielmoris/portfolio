import "./portfolio.scss";
import { Down } from "../intro/Down";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Portfolio() {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.2,
                },
            });
        }
        if (!inView) {
            animation.start({
                x: "-100vw",
            });
        }
    }, [inView]);

    return (
        <div className="portfolio" id="portfolio" ref={ref}>
            <motion.div className="left" animate={animation}>
                <h1>Education</h1>
                <div className="spiced">
                    <h2>
                        Full Stack Developer Bootcamp <br />
                        (11/2021 -02/2022)
                    </h2>
                    <h2 className="school">Spiced Academy</h2>
                    <h3>
                        - Learn the most used technologies as a web developer
                        and work with programming fundamentals such as
                        debugging, the command line, and GitHub.
                        <br />- Build server-side JavaScript applications using
                        Node.js, and learn to use third party APIs to create
                        single page web applications with popular front-end
                        frameworks.
                    </h3>
                </div>
                <div className="master">
                    <h2>
                        Master in teaching for secondary education and
                        baccalaureate (music) <br />
                        (2018)
                    </h2>
                    <h2 className="school">
                        University of Santiago de Compostela
                    </h2>
                    <h3>
                        -Learn the basics of developmental psychology and
                        pedagogy.
                        <br />- Improve organization and communication skills.
                    </h3>
                </div>
            </motion.div>
            <motion.div className="right" animate={animation}>
                <h1>Experience</h1>
                <div className="explanation">
                    During the former experience as a teacher and musician
                    carried out in the hast 11 years the following skills where
                    developed:
                </div>
                <div className="teamwork">
                    <h2>Teamwork</h2>
                    <h3>
                        - Organicing and performing concerts in a brass quintet.
                        <br />- Preparing classes in a department of teachers.
                    </h3>
                </div>
                <div className="communication">
                    <h2>Communication</h2>
                    <h3>
                        - Explaining complex terms effectively in a plain
                        language to students of all ages.
                    </h3>
                </div>
                <div className="creativity">
                    <h2>Creativity and problem-solving</h2>
                    <h3>
                        - Developing my own creative exercises to solve
                        potential technical problems.
                    </h3>
                </div>
            </motion.div>
            <a className="arrow-opinions" href="#opinions">
                <Down />
            </a>
        </div>
    );
}
