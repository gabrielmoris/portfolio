import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    const [submited, setSubmited]: [boolean, any] = useState(false);
    const [userInput, setUserInput] = useState({});
    const [error, setError]: [boolean, any] = useState(false);

    const handleChange = (e: any) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value,
        });
        console.log(userInput)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log("user wants to submit",this.state)
        fetch("/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
            .then((data) => data.json())
            .then((data) => {
                // console.log("response data from /sendmail", data.success);
                if (data.success === true) {
                    setSubmited(true);
                    setError(false)
                } else {
                    setError(true);
                    setSubmited(false)
                }
            })
            .catch((err) => {
                console.log("Err in fetch sendmail", err);
                setError(true);
            });
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/contact2.png" alt="contact" />
            </div>
            <div className="right">
                <h2>Contact me:</h2>
                <form>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="email"
                    />

                    <textarea
                        placeholder="Write me here"
                        name="message"
                        onChange={handleChange}
                    ></textarea>
                    <button onClick={handleSubmit}>Send</button>
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
                            An unexpected error ocurred.
                            <br /> I will solve it as soon as possible.
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
