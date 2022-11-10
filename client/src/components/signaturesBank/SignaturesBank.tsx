import "./signaturesBank.scss";

export default function SignaturesBank() {
    return (
        <div className="signaturesBank">
            <div className="up">
                <h1>Signatures Bank</h1>
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
                        <li>PostgreSQL</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://signaturesbank-production.up.railway.app/"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        When I want to sign documents online I face the
                        difficulty of doing It with the mouse.
                        <br /> I developed this website to take advantage of the
                        touch screen of the phone and download the signature on
                        the computer.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/signaturesbank.jpg"
                                alt="signaturesbank-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The website requires registration and works on the phone
                        and desktop. After registration you can store your
                        signature drawing in a canvas with your finger or, if
                        you prefer, you can do it with the mouse. You can delete
                        and redo your signature all the times you want and
                        download the signature as a .png without background.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/signaturesbank.gif"
                                alt="signaturesbank-screen-gif"
                            />
                        </div>
                    </div>
                    <p>
                        As an additional feature, you can check the names,
                        cities, and websites (if provided) of the people who
                        also signed, but never their signatures.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
