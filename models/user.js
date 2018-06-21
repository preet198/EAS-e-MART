const db = require('../database/connection');

const User = {};

User.findByUsername = username => {
  return db.one("SELECT * FROM users WHERE username = $1", [username]);
}

User.create = (newUser) =>
  db.one(
    `INSERT INTO users (username, password_digest)
    VALUES ($<username>, $<password_digest>) RETURNING *`, newUser
  );

module.exports = User;