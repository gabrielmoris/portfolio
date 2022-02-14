import "./intro.scss";
import { motion } from "framer-motion";
import { Down } from "./Down";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

export default function Intro() {
    // const textRef: {current:any} = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //         showCursor: false,
    //         typeSpeed: 100,
    //         strings: [
    //             "― Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master",
    //         ],
    //     });
    // }, []);

    return (
        <div className="intro" id="intro">
            <div className="text-over-img">
                <motion.div
                    initial={{ x: 1000 }}
                    // animate={{ x: 150 }}
                    animate={{ x: "24%" }}
                    transition={{
                        type: "spring",
                        duration: 5,
                    }}
                >
                    <h1 className="im-gabriel">I'm Gabriel,</h1>
                </motion.div>
                <motion.div
                    initial={{ x: -500 }}
                    // animate={{ x: 40 }}
                    animate={{ x: "18%" }}
                    transition={{
                        type: "spring",
                        duration: 5,
                    }}
                >
                    <h1>a frontend developer.</h1>
                </motion.div>
            </div>
            <div className="body-intro">
                <div className="left">
                    <motion.div
                        className="img-container"
                        // animate={{ x: -155 }}
                        initial={{ x: -200 }}
                        animate={{ x: -5 }}
                        transition={{
                            type: "spring",
                            bounce: 0.5,
                            duration: 2,
                        }}
                    >
                        <img src="./assets/yo.png" alt="Gabriel C. Moris" />
                    </motion.div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        <div className="text-wrapper">
                            <h2>
                                “An investment in knowledge always pays the best
                                interest.”
                                <br />
                            </h2>
                            {/* <h3 ref={textRef}> */}
                            <h3>
                                ― Andrew Hunt, The Pragmatic Programmer: From
                                Journeyman to Master
                            </h3>
                        </div>
                        <a href="#projects">
                            <Down />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
