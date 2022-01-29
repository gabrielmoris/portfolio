import "./topbar.scss";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faPhone, faMailBulk} from "@fortawesome/free-solid-svg-icons"

interface Props{
    hamburger:boolean;
    setHamburger:(value:boolean)=>void;
}

export default function Topbar({hamburger, setHamburger}:Props) {

    return (
        <div className={"topbar " + (hamburger && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Gabriel C. Moris
                    </a>
                    <div className="item-container">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="icon"
                        ></FontAwesomeIcon>
                        <span>+4915732613658</span>
                    </div>
                    <div className="item-container">
                        <FontAwesomeIcon
                            icon={faMailBulk}
                            className="icon"
                        ></FontAwesomeIcon>
                        <span>gabrieltrompeta@gmail.com</span>
                    </div>
                </div>
                <h2>Frontend Developer</h2>
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
