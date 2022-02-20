import "./writersbook.scss";

export default function Writersbook() {
    return (
        <div className="writersbook">
            <div className="up">
                <h1>Writersbook</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>socket.io</li>
                        <li>Amazon Web Services</li>
                        <li>Multer</li>
                        <li>PostgreSQL</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://writersbook.herokuapp.com/"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        As a Frontend is necessary to know libraries like React
                        and this project was a way to show and practice my
                        skills with this library as well as with Redux, aws, and
                        socket.io.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/writersbook.jpg"
                                alt="writersbook-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The app needs registration, afterwards, the user can
                        upload a profile picture and write a biography.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/writersbook.gif"
                                alt="writersbook-gif"
                            />
                        </div>
                    </div>
                    <p>
                        Redux allows me to update the data at the same moment
                        the user interacts, for example when following another
                        user. In addition, with socket.io, the user can write in
                        the chat where the rest of the users will have the data
                        instantaneously.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
