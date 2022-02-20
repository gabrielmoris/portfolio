import "./imageboard.scss";

export default function Imageboard() {
    return (
        <div className="imageboard">
            <div className="up">
                <h1>My Imageboard</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>Amazon Web Services</li>
                        <li>Multer</li>
                        <li>PostgreSQL</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://gabrielimageboard.herokuapp.com/"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        When I see a beautiful landscape or something that
                        attracts my attention I take pictures. I wanted to do an
                        imageboard to store and show my pictures and give the
                        opportunity of adding some pictures to more people.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/imageboard.jpg"
                                alt="imageboard-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        No registration is needed. Just enter, upload a picture
                        and a description.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/imageboard.gif"
                                alt="imageboard-screen-gif"
                            />
                        </div>
                    </div>
                    <p>
                        The users can leave comments and add pictures. I used
                        Vue.js and AWS as a practice to learn these technologies
                        and improve my coding skills.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
