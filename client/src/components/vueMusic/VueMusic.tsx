import "./vueMusic.scss";

export default function VueMusic() {
    return (
        <div className="vueMusic">
            <div className="up">
                <h1>Vue Music App</h1>
            </div>
            <hr />
            <div className="main">
                <div className="left">
                    <h2>Technologies</h2>
                    <ul>
                        <li>Vue 3</li>
                        <li>Tailwind</li>
                        <li>Firebase</li>
                        <li>Vite</li>
                        <li>Pinia</li>
                        <li>Vitest</li>
                    </ul>

                    <a
                        className="my-button"
                        target="_blank"
                        href="https://yourmusic.vercel.app/"
                    >
                        View website
                    </a>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>
                        An app to upload, listen and comment no licensed music.
                        I developed this website to deeply learn the vue 3
                        framework as well as firebase (auth, firestoreand
                        database).
                        <br />
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/vue-music-app.jpg"
                                alt="music-app-screen"
                            />
                        </div>
                    </div>
                    <h2>Description</h2>
                    <p>
                        The website requires registration and works on the phone
                        and desktop. After registration you can store your music
                        or listen all music available. The user can edit, add or
                        delete his own music or comment in all songs.
                    </p>
                    <div>
                        <div className="image">
                            <img
                                src="https://onionimageboard.s3.amazonaws.com/portfolio/vue-music-app.gif"
                                alt="music-app-screen-gif"
                            />
                        </div>
                    </div>
                    <p>
                        The backend is implemented with firebase and the state
                        with pinia.
                    </p>
                </div>
            </div>
            <div className="down"></div>
        </div>
    );
}
