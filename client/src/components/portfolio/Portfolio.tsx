import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="left">
                <h1>Education</h1>
                <div className="spiced">
                    <h2>
                        Full Stack Developer Bootcamp <br />
                        (11/2021 -02/2022)
                    </h2>
                    <h2>Spiced Academy</h2>
                    <h3>
                        - Learn the most used technologies as a web developer
                        and work with programming fundamentals such as
                        debugging, the command line, and GitHub.
                        <br />- Build server-side JavaScript applications using
                        Node.js, and learn to use third party APIs to create
                        single page web applications with popular front-end
                        frameworks.
                    </h3>
                </div>
                <div className="master">
                    <h2>
                        Master in teaching for secondary education and
                        baccalaureate (music) <br />
                        (2018)
                    </h2>
                    <h2>University of Santiago de Compostela</h2>
                    <h3>-Learn the basics of developmental psychology and pedagogy.<br/>
                      - Improve organization and communication skills.
                    </h3>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}
