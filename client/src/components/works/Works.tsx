import "./works.scss";
import WorksList from "./worksList/WorksList";
import { Down } from "../intro/Down";

export default function Works() {
    const works2 = [
        {
            id: 1,
            img: "./assets/workPics/writtersbook.jpg",
            url: "https://writersbook.herokuapp.com/",
            github: "https://github.com/gabrielmoris/writersbook",
            name: "WritersBook",
        },
        {
            id: 2,
            img: "./assets/workPics/imageboard.png",
            url: "https://gabrielimageboard.herokuapp.com/",
            github: "https://github.com/gabrielmoris/imageboard",
            name: "My Imageboard",
        },
        {
            id: 3,
            img: "./assets/workPics/signaturesbank.png",
            url: "https://signaturebank.herokuapp.com/",
            github: "https://github.com/gabrielmoris/signaturesBank",
            name: "Signatures Bank",
        },
        {
            id: 4,
            img: "./assets/workPics/manu.jpg",
            url: "https://www.manuelcasares.com",
            github: "https://github.com/gabrielmoris/Manuel-Casares",
            name: "Manuel Casares Website",
        },
        {
            id: 5,
            img: "https://onionimageboard.s3.amazonaws.com/portfolio/vue-music-app.jpg",
            url: "https://competent-mestorf-e41da5.netlify.app/",
            github: "https://github.com/gabrielmoris/codingChallenges/tree/master/week4/handlebarsSpotify",
            name: "Vue Music App",
        },
        {
            id: 6,
            img: "./assets/workPics/brasscollective.png",
            url: "https://www.thebrasscollective.com/",
            github: "https://github.com/gabrielmoris/www.thebrasscollective.com",
            name: "The Brass Collective",
        },
    ];

    return (
        <div className="works" id="projects">
            <div className="works-title">
                <h2>Check my projects</h2>
            </div>
            <div className="works-body">
                {works2 &&
                    works2.map(
                        (work: { id: number; img: string; name: string }) => {
                            return (
                                <WorksList
                                    id={work.id}
                                    img={work.img}
                                    name={work.name}
                                />
                            );
                        }
                    )}
            </div>
            <a className="arrow-portfolio" href="#aboutme">
                <Down />
            </a>
        </div>
    );
}
