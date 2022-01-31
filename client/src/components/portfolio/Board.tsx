import React from "react";

export default function Board(props: any) {
    const drop = (e: any) => {
        e.preventDefault();
        const tech_id = e.dataTransfer.getData("tech_id");

        const tech: any = document.getElementById(tech_id);
        tech.style.display = "block";

        e.target.appendChild(tech);
        console.log(e.target.appendChild(tech).getAttribute('id'))
        
        
    };

    const dragOver = (e: any) => {
        e.preventDefault();
    };

    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            {props.children}
        </div>
    );
}
