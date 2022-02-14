import { useEffect, useState } from "react";
import "./works.scss";
import WorksList from "./worksList/WorksList";
import { Down } from "../intro/Down";

export default function Works() {
    const [works, setWorks] = useState([]);

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

    return (
        <div className="works" id="works">
            <div className="top">
                <h2>Check my projects</h2>
            </div>
            <div className="bottom">
                {works &&
                    works.map(
                        (work: {
                            id: number;
                            img: string;
                            name: string;
                        }) => {
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
