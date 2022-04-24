import "./topbar.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
    hamburger: boolean;
    setHamburger: (value: boolean) => void;
}

export default function Topbar({ hamburger, setHamburger }: Props) {
    return (
        <div className={"topbar " + (hamburger && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a
                        href="/#intro"
                        className={"logo " + (hamburger && "active")}
                    >
                        Gabriel C. Moris
                    </a>
                </div>
                <div className="item-container">
                    <ul className="ul-navBar">
                        <a href="/#intro">Home</a>
                        <a href="/#projects">Projects</a>
                        <a href="/#aboutme">About me</a>
                        <a href="/#opinions">Opinions</a>
                        <a href="/#contact">Contact</a>
                    </ul>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => setHamburger(!hamburger)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
