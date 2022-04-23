export default function Board(props: any) {
    const drop = (e: any) => {
        e.preventDefault();
        const tech_id = e.dataTransfer.getData("tech_id");

        const tech: any = document.getElementById(tech_id);
        tech.style.display = "block";

        e.target.appendChild(tech);

        const eachTech: string = e.target.appendChild(tech).getAttribute("id");
        props.techCheck(eachTech);
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
            style={{
                backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.4)
        ), url(./assets/box.svg)`,
                backgroundSize: `cover`,
            }}
        >
            {props.children}
        </div>
    );
}
