import "./intro.scss";
import { motion } from "framer-motion";
import { Down } from "./Down";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef: any = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 100,
            strings: [
                "― Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master",
            ],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="text-over-img">
                    <motion.div
                        initial={{ x: 500 }}
                        animate={{ x: 150 }}
                        transition={{
                            type: "spring",
                            duration: 5,
                        }}
                    >
                        <h1>I'm Gabriel,</h1>
                    </motion.div>
                    <motion.div
                        initial={{ x: -500 }}
                        animate={{ x: 40 }}
                        transition={{
                            type: "spring",
                            duration: 5,
                        }}
                    >
                        <h1>a frontend developer.</h1>
                    </motion.div>
                </div>
                <motion.div
                    className="img-container"
                    animate={{ x: -155 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 2 }}
                >
                    <img src="./assets/yo.png" alt="Gabriel C. Moris" />
                </motion.div>
            </div>

            <div className="right">
                <div className="wrapper">
                   <div className="text-wrapper"> <h2>
                        “An investment in knowledge always pays the best
                        interest.”
                        <br />
                    </h2>
                    <h3 ref={textRef}></h3></div>
                    <a href="#works">
                        <Down />
                    </a>
                </div>
            </div>
        </div>
    );
}
