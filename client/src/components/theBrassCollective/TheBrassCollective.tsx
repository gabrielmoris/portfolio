import "./theBrassCollective.scss";

export default function TheBrassCollective() {
    return (
        <div className="theBrassCollective">
            <div className="up">
                <h1>The Brass Collective</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap 5</li>
                        <li>JavaScript</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="http://www.thebrasscollective.com"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        The customer needed a website to apply for big projects
                        and reach more potential clients. After deploying the
                        website the customer was sponsored to do a recording
                        session and increased the calls for concerts by more
                        than 200%.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/brassDesk.jpg"
                                alt="brass-collective-desk"
                            />
                        </div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/tbcscreenshot.jpg"
                                alt="brass-collective-mob"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The design of the website is focused on the colors of
                        the brass instruments and the dark color from the
                        background contrasts the content more clear. The media
                        section shows the latest works of the brass band and the
                        footer allows visiting the Instagram, phone, email, and
                        youtube channel. The contact form makes clear the reason
                        for the email and gives the potential customer an easy
                        way to contact this brass band.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
