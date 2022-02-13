import "./imageboard.scss"

export default function Imageboard() {
  return (
      <div className="imageboard">
          <div className="up">
              <h1>My Imageboard</h1>
          </div>
          <hr />
          <div className="main">
              <div className="left">
                  <h2>Technologies</h2>
                  <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>Vue.js</li>
                      <li>Amazon Web Services</li>
                      <li>Multer</li>
                      <li>PostgreSQL</li>
                  </ul>

                  <a
                      className="my-button"
                      target="_blank"
                      href="https://gabrielimageboard.herokuapp.com/"
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
                              src="https://onionimageboard.s3.amazonaws.com/portfolio/imageboard.jpg"
                              alt="imageboard-screen"
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
                          src="https://onionimageboard.s3.amazonaws.com/portfolio/imageboard.gif"
                          alt="imageboard-screen-gif"
                      />
                  </div>
              </div>
          </div>
          <div className="down"></div>
      </div>
  );
}
