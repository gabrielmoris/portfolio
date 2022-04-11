import "./connect4.scss";

import React from "react";

export default function Connect4() {
    return (
        <div className="connect4">
            <div className="up">
                <h1>Manuel Casares Website</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>Figma</li>
                        <li>Next.js</li>
                        <li>Typescropt</li>
                        <li>SCSS</li>
                        <li>Youtube API</li>
                        <li>AJAX(formsubmit.co)</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://www.manuelcasares.com"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        The customer needed a website to reach more potential
                        clients. The website was designed following all the
                        requirements of the customer and offers solutions to
                        engage possible customers with interesting features.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/manuelcasaresimg.jpg"
                                alt="Manuelcasares-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The mockup is done in Figma to afterward style with
                        SCSS. the colors are dark and elegant as the customer
                        requested and the layout is clean but shows the most
                        relevant information. The media section shows the latest
                        works of his youtube channel using the API of Youtube
                        and the footer allows visiting the Youtube, Twitch, and
                        Reddit channels of the customer. The contact form uses
                        an AJAX request sending directly an email to the
                        customer with all the data. All fields are marked as
                        required.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/manuelcasaresgif.gif"
                                alt="manuelcasares-screen-gif"
                            />
                        </div>
                    </div>
                    <p>
                        As a former musician, I know the importance of showing
                        his work to the customers. I offered the solution to
                        show his repertory more directly with clickable
                        components which open audio to listen to excerpts of his
                        works.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
