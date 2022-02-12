 DROP TABLE IF EXISTS works;
 DROP TABLE IF EXISTS techs;

 CREATE TABLE works (
      id SERIAL PRIMARY KEY,
      img VARCHAR,
      url VARCHAR,
      github VARCHAR,
      name TEXT,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE techs (
    id SERIAL PRIMARY KEY,
    tech VARCHAR,
    points INT
  );

  INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/writtersbook.png',
    'https://writersbook.herokuapp.com/',
    'https://github.com/gabrielmoris/writersbook',
    'WritersBook',
    'React, Redux, socket.io, Jest, AWS, PostgreSql,   
  Typescript.'
);
  INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/imageboard.png',
    'https://gabrielimageboard.herokuapp.com/',
    'https://github.com/gabrielmoris/imageboard',
    'My Imageboard',
    'Html, CSS, Javascript,Node.js, Express, Vue.js, AWS,   
  PostgreSql.'
);
  INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/signaturesbank.png',
    'https://signaturebank.herokuapp.com/',
    'https://github.com/gabrielmoris/signaturesBank',
    'Signatures Bank',
    'Html, CSS, Javascript, Node.js, Express, PostgreSql.'
);
 INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/connect4.png',
    'https://jovial-mestorf-9b8260.netlify.app/',
    'https://github.com/gabrielmoris/codingChallenges/tree/master/week3/connect4',
    'Connect 4',
    'Html, CSS, Javascript, jQuery.'
);
  INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/simongame.png',
    'https://clever-hoover-4bef8a.netlify.app/',
    'https://github.com/gabrielmoris/PersonalLearning/tree/master/Simon%20Game%20JS',
    'Simon Game',
    'Html, CSS, Javascript, jQuery.'
);
INSERT INTO works(img, url, github, name, description) VALUES (
    'https://onionimageboard.s3.amazonaws.com/brasscollective.png',
    'https://www.thebrasscollective.com/',
    'https://github.com/gabrielmoris/www.thebrasscollective.com',
    'The Brass Collective',
    'Html, CSS, Javascript, Github, Figma.'
);

INSERT INTO techs(tech,points) VALUES (
    'HTML5',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'CSS3',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'JavaScript',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'jQuery',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Git',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'GitHub',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Node.js & Express',
    0
);

INSERT INTO techs(tech,points) VALUES (
    'AWS',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Figma',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'TypeScript',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'PostgreSQL',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Vue.js',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Jest',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'React',
    0
);
INSERT INTO techs(tech,points) VALUES (
    'Redux',
    0
);