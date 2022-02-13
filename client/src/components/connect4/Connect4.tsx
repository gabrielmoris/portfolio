import "./connect4.scss";

import React from 'react'

export default function Connect4() {
  return (
      <div className="connect4">
          <div className="up">
              <h1>Connect 4</h1>
          </div>
          <hr />
          <div className="main">
              <div className="left">
                  <h2>Technologies</h2>
                  <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                  </ul>

                  <a
                      className="my-button"
                      target="_blank"
                      href="https://jovial-mestorf-9b8260.netlify.app/"
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
                              src="https://onionimageboard.s3.amazonaws.com/portfolio/connect4.jpg"
                              alt="connect4-screen"
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
              </div>
          </div>
          <div className="down"></div>
      </div>
  );
}
