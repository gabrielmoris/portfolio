import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Opinions from "./components/opinions/Opinions";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App(){
const [hamburger, setHamburger] = useState(false)

    return (
        <div className="app">
            <Topbar hamburger={hamburger} setHamburger={setHamburger} />
            <Menu hamburger={hamburger} setHamburger={setHamburger} />
            <div className="sections">
                <Intro />
                <Works />
                <Portfolio />
                <Opinions />
                <Contact />
            </div>
        </div>
    );
}

export default App;
