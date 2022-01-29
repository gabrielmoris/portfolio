 DROP TABLE IF EXISTS works;

 CREATE TABLE works (
      id SERIAL PRIMARY KEY,
      img VARCHAR,
      url VARCHAR,
      name TEXT,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/writtersbook.png',
    'https://writersbook.herokuapp.com/',
    'WritersBook',
    'React, Redux, socket.io, Jest, AWS, PostgreSql,   
  Typescript.'
);
  INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/imageboard.png',
    'https://gabrielimageboard.herokuapp.com/',
    'My Imageboard',
    'Html, CSS, Javascript,Node.js, Express, Vue.js, AWS,   
  PostgreSql.'
);
  INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/signaturesbank.png',
    'https://signaturebank.herokuapp.com/thanks',
    'Signatures Bank',
    'Html, CSS, Javascript, Node.js, Express, PostgreSql.'
);
 INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/connect4.png',
    'https://jovial-mestorf-9b8260.netlify.app/',
    'Connect 4',
    'Html, CSS, Javascript, jQuery.'
);
  INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/simongame.png',
    'https://clever-hoover-4bef8a.netlify.app/',
    'Simon Game',
    'Html, CSS, Javascript, jQuery.'
);
INSERT INTO works(img, url, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/brasscollective.png',
    'https://www.thebrasscollective.com/',
    'The Brass Collective Website',
    'Html, CSS, Javascript, Github, Figma.'
);