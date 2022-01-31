import "./contact.scss"


export default function Contact() {
  return (
      <div className="contact" id="contact">
          <div className="left">
              <img src="./assets/contact.png" alt="contact" />
          </div>
          <div className="right">
            <h2>Contact me:</h2>
            <form>
              <input type="email" placeholder="email"/>
              <textarea placeholder="Write me here"></textarea>
              <button>Send</button>
            </form>
          </div>
      </div>
  );
}
