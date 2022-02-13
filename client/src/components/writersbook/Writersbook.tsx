import "./writersbook.scss";

export default function Writersbook() {
  return (
      <div className="writersbook">
          <div className="up">
              <h1>Writersbook</h1>
          </div>
          <hr />
          <div className="main">
              <div className="left">
                  <h2>Technologies</h2>
                  <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Redux</li>
                      <li>socket.io</li>
                      <li>Amazon Web Services</li>
                      <li>Multer</li>
                      <li>PostgreSQL</li>
                  </ul>

                  <a
                      className="my-button"
                      target="_blank"
                      href="https://writersbook.herokuapp.com/"
                  >
                      View website
                  </a>
              </div>
              <div className="right">
                  <h2>About</h2>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus, dignissimos molestiae quidem cupiditate quisquam et
                      hic soluta dolor voluptate illum, nam rem labore
                      aspernatur molestias neque iure quo consectetur nisi.
                  </p>
                  <div>
                      <div className="image">
                          <img
                              src="https://onionimageboard.s3.amazonaws.com/portfolio/writersbook.jpg"
                              alt="writersbook-screen"
                          />
                      </div>
                  </div>
                  <h2>Description</h2>
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Unde modi illum, dolor rerum perferendis asperiores quod
                      eos autem, facilis animi sequi sunt a laudantium corrupti
                      accusantium velit recusandae, quas eaque?
                  </p>
                  <div className="image">
                      <img
                          src="https://onionimageboard.s3.amazonaws.com/portfolio/writersbook.gif"
                          alt="writersbook-gif"
                      />
                  </div>
              </div>
          </div>
          <div className="down"></div>
      </div>
  );
}
