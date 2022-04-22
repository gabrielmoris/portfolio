import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/Aboutme";
import Opinions from "./components/opinions/Opinions";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TheBrassCollective from "./components/theBrassCollective/TheBrassCollective";
import SpotifyApi from "./components/spotifyApi/SpotifiApi"
import Connect4 from "./components/connect4/Connect4";
import SignaturesBank from "./components/signaturesBank/SignaturesBank"
import Imageboard from "./components/imageboard/Imageboard";
import Writersbook from "./components/writersbook/Writersbook"

function Home() {
    return (
        <div
            className="sections"
            style={{ backgroundImage: `url(./assets/background.svg)` }}
        >
            <Intro />
            <Works />
            <AboutMe />
            <Opinions />
            <Contact />
        </div>
    );
}

function App() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <BrowserRouter>
            <div className="app">
                <Topbar hamburger={hamburger} setHamburger={setHamburger} />
                <Menu hamburger={hamburger} setHamburger={setHamburger} />
                <Switch>
                    <Route path="/work/6">
                        <TheBrassCollective />
                    </Route>
                    <Route path="/work/5">
                        <SpotifyApi />
                    </Route>
                    <Route path="/work/4">
                        <Connect4 />
                    </Route>
                    <Route path="/work/3">
                        <SignaturesBank />
                    </Route>
                    <Route path="/work/2">
                        <Imageboard />
                    </Route>
                    <Route path="/work/1">
                        <Writersbook />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
