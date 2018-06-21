const db = require("../db/connection");

const Users = {};

Users.all = () => {
  return db.any('SELECT * FROM users');
};

Users.find = id => {
  return db.one("SELECT * FROM users WHERE id = ${id} ORDER BY ID ASC", { id: id });
};

Users.create = newUser => {
  return db.one("INSERT INTO users (username, password_digest, phone_number, email, location, first_name, last_name, latitude, longitude) VALUES (${username}, ${password_digest}, ${phone_number}, ${email}, ${location}, ${first_name}, ${last_name}, ${latitude}, ${longitude}) RETURNING *", newUser);
};

Users.update = updatedUser => {
  return db.none("UPDATE users SET username = ${username}, password_digest = ${password_digest}, phone_number = ${phone_number}, email = ${email}, location = ${location}, first_name = ${first_name}, last_name = ${last_name}, latitude = ${latitude}, longitude = ${longitude} WHERE username = ${username}", updatedUser);
};

Users.delete = username => {
  return db.result("DELETE FROM users WHERE username = ${username}", { username: username });
};

module.exports = Users;
