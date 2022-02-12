// import Topbar from "./components/topbar/Topbar";
// import Intro from "./components/intro/Intro";
// import Opinions from "./components/opinions/Opinions";
// import Works from "./components/works/Works";
// import Contact from "./components/contact/Contact";
// import AboutMe from "./components/aboutme/Aboutme";
// import Menu from "./components/menu/Menu";
// import "./app.scss";
// import { useState } from "react";
// import EachWork from "./components/eachwork/EachWork";
// import {BrowserRouter, Route} from "react-router-dom";

// function App(){
// const [hamburger, setHamburger] = useState(false)

//     return (
//         <div className="app">
//             <Topbar hamburger={hamburger} setHamburger={setHamburger} />
//             <Menu hamburger={hamburger} setHamburger={setHamburger} />
//             <div className="sections">
//                 <Intro />
//                 <Works />
//                 <AboutMe />
//                 <Opinions />
//                 <Contact />
//                 <BrowserRouter>
//                     <Route path="/work">
//                         <EachWork />
//                     </Route>
//                 </BrowserRouter>
//             </div>
//         </div>
//     );
// }

// export default App;

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Opinions from "./components/opinions/Opinions";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/Aboutme";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import TheBrassCollective from "./components/theBrassCollective/TheBrassCollective";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
    return (
        <div className="sections">
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
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
