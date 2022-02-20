import "./spotifyApi.scss";

export default function SpotifiApi() {
    return (
        <div className="spotifyApi">
            <div className="up">
                <h1>Spotify Api</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Handlebars</li>
                        <li>jQuery</li>
                        <li>Ajax Request</li>
                        <li>Spotify API</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://competent-mestorf-e41da5.netlify.app"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        APIs have vital importance in all industries. Allows us
                        to use the capabilities of one computer program to be
                        used by another. This project covers the necessity to
                        learn this important tool for the industry.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/spotifyScren.jpg"
                                alt="Spotify-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        Using the Spotify API, I developed a searching engine
                        that gives me all the Artists or Albums which coincide
                        with the input. The results are shown in clickable cards
                        that bring you to the actual Spotify player.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
