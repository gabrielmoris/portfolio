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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, dignissimos molestiae quidem cupiditate quisquam
                        et hic soluta dolor voluptate illum, nam rem labore
                        aspernatur molestias neque iure quo consectetur nisi.
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde modi illum, dolor rerum perferendis
                        asperiores quod eos autem, facilis animi sequi sunt a
                        laudantium corrupti accusantium velit recusandae, quas
                        eaque?
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
