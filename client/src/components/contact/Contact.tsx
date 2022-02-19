import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    const [submited, setSubmited]: [boolean, (value: any) => void] =
        useState(false);
    const [userInput, setUserInput] = useState({});
    const [error, setError]: [boolean, (value: any) => void] = useState(false);

    const handleChange = (e: any) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.success === true) {
                    setSubmited(true);
                    setError(false);
                } else {
                    setError(true);
                    setSubmited(false);
                }
            })
            .catch((err) => {
                console.log("Err in fetch sendmail", err);
                setError(true);
            });
    };

    return (
        <div className="contact" id="contact">
            {/* <div className="left">
                <img src="./assets/contact.png" alt="contact" />
            </div> */}
            <div className="right">
                <h2>Contact me:</h2>
                <form>
                    <label>Your E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="email"
                    />

                    <label>Your name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="name"
                    />

                    <label>Write a message:</label>
                    <textarea
                        placeholder="Write me here"
                        name="message"
                        onChange={handleChange}
                    ></textarea>
                    <button className="my-button" onClick={handleSubmit}>
                        Send
                    </button>
                    {submited && (
                        <span style={{ color: "#f2d8ce9f" }}>
                            Thank you!
                            <br /> I will contact you as soon as possible.
                        </span>
                    )}
                    {error && (
                        <span
                            style={{
                                color: "rgba(255, 0, 0, 0.8)",
                                fontWeight: 900,
                            }}
                        >
                            Error.
                            <br /> Email not valid.
                        </span>
                    )}
                </form>
                <footer>
                    <p className="copyright">© Gabriel C. Moris 2022</p>
                </footer>
            </div>
        </div>
    );
}
