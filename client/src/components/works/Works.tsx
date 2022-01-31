import { useEffect, useState } from "react";
import "./works.scss";
import WorksList from "./worksList/WorksList";
import { Down } from "../intro/Down";

export default function Works() {
    const [works, setWorks]: any = useState([]);

    useEffect(() => {
        let abort = false;
        fetch(`/works`)
            .then((res) => res.json())
            .then((work) => {
                if (!abort) {
                    setWorks(work);
                }
            });
        return () => {
            abort = true;
        };
    }, []);

    console.log(works);

    return (
        <div className="works" id="works">
            <div className="top">
                <h1>Projects Portfolio</h1>
            </div>
            <div className="bottom">
                {works &&
                    works.map(
                        (work: {
                            id: number;
                            img: string;
                            name: string;
                            url: string;
                            description: string;
                        }) => {
                            return (
                                <WorksList
                                    id={work.id}
                                    img={work.img}
                                    name={work.name}
                                    url={work.url}
                                    description={work.description}
                                />
                            );
                        }
                    )}
                <a className="arrow-portfolio" href="#portfolio">
                    <Down />
                </a>
            </div>
        </div>
    );
}
