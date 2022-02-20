import "./connect4.scss";

import React from "react";

export default function Connect4() {
    return (
        <div className="connect4">
            <div className="up">
                <h1>Connect 4</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://jovial-mestorf-9b8260.netlify.app/"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        This was one of my first projects with vanilla
                        Javascript. The idea of making this game involves a
                        complex javascript logic to check the winner algorithm.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/connect4.jpg"
                                alt="connect4-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The game starts when the first user clicks in a row, the
                        first one who put 4 coins together wins. It can be
                        horizontal, vertical, or diagonal. It is possible to
                        restart the game after winning.<br/> Apparently, the app is
                        very simple, but the complexity to check the winner was
                        very challenging.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
