// import EachWork from "./eachWorkOld/EachWorkOld";
import "./worksList.scss";
import { useState } from "react";
import { Link } from "react-router-dom";


interface Props {
    id: number;
    img: string;
    name: string;
}

export default function WorksList({ id, img, name }: Props) {
    const [open, setOpen]: any = useState(false);

    return (
        <>
                <Link to={`/work/${id}`}>
                    <div
                        className="item"
                        onClick={() => setOpen(!open)}
                        key={id}
                    >
                        <img src={img} alt={name} />
                        <h3>{name}</h3>
                    </div>
                </Link>
        </>
    );
}
