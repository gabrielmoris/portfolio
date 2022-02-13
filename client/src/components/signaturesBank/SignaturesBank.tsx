import "./signaturesBank.scss";

export default function SignaturesBank() {
  return (
      <div className="signaturesBank">
          <div className="up">
              <h1>Signatures Bank</h1>
          </div>
          <hr />
          <div className="main">
              <div className="left">
                  <h2>Technologies</h2>
                  <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>Handlebars</li>
                  </ul>

                  <a
                      className="my-button"
                      target="_blank"
                      href="https://signaturebank.herokuapp.com/"
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
                              src="https://onionimageboard.s3.amazonaws.com/portfolio/signaturesbank.jpg"
                              alt="signaturesbank-screen"
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
                          src="https://onionimageboard.s3.amazonaws.com/portfolio/signaturesbank.gif"
                          alt="signaturesbank-screen-gif"
                      />
                  </div>
              </div>
          </div>
          <div className="down"></div>
      </div>
  );
}
