DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follows;

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  follower_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  replier_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (replier_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  liker_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (liker_id) REFERENCES users(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Nathan', 'Lehrer'),
  ('Jonathan', 'Tsao'),
  ('Roger', 'Federer'),
  ('Rafael', 'Nadal'),
  ('Draymond', 'Green'),
  ('Kevin', 'Smith'),
  ('Kevin', 'Durant');

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('Ruby Question', 'How do I Ruby?', (SELECT id FROM users WHERE fname = 'Nathan')),
  ('SQL Question', 'How do I SQL?', (SELECT id FROM users WHERE fname = 'Kevin')),
  ('JS Question', 'How do I JS?', (SELECT id FROM users WHERE fname = 'Nathan')),
  ('Rails Question', 'How do I Rails?', (SELECT id FROM users WHERE fname = 'Roger')),
  ('Math Question', 'How do I Math?', (SELECT id FROM users WHERE fname = 'Draymond'));

INSERT INTO
  question_follows (follower_id, question_id)
VALUES
  (1, 1),
  (2, 1),
  (1, 2),
  (3, 2);

INSERT INTO
  replies (question_id, parent_reply_id, replier_id, body)
VALUES
  (1, NULL, 2, 'It''s Easy'),
  (1, 1, 1, 'No it is not'),
  (2, NULL, 4, 'Just look it up'),
  (3, NULL, 4, 'I don''t know, I''m a tennis player');

INSERT INTO
  likes (question_id, liker_id)
VALUES
  (1, 3),
  (1, 2),
  (1, 4),
  (2, 1),
  (2, 2),
  (2, 4),
  (4, 2);
