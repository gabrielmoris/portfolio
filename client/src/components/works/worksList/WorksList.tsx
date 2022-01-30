import EachWork from "./eachWork/EachWork";
import "./worksList.scss";
import { useState } from "react";

interface Props {
    id: number;
    img: string;
    name: string;
    url: string;
    description: string;
}

export default function WorksList({ id, img, name, url, description }: Props) {
    const [open, setOpen]: any = useState(false);

    return (
        <>
            <div className="item" onClick={() => setOpen(!open)} key={id}>
                <img src={img} alt={name} />
                <h3>{name}</h3>
                {}
            </div>
            {open && (
                <EachWork
                    img={img}
                    name={name}
                    url={url}
                    description={description}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </>
    );
}
