import "./menu.scss";


//example of not a good practice, I dont declare the interface props.
export default function Menu(props: any) {

    return (
        <div className={"menu " + (props.hamburger && "active")}>
            <ul className={(props.hamburger && "active")}>
                <li onClick={() => props.setHamburger(false)}>
                    <a href="/#intro">Home</a>
                </li>
                <li onClick={() => props.setHamburger(false)}>
                    <a href="/#works">Projects</a>
                </li>
                <li onClick={() => props.setHamburger(false)}>
                    <a href="/#aboutme">About me</a>
                </li>
                <li onClick={() => props.setHamburger(false)}>
                    <a href="/#opinions">Opinions</a>
                </li>
                <li onClick={() => props.setHamburger(false)}>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}
