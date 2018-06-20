DROP DATABASE IF EXISTS eas_e_mart;
CREATE DATABASE eas_e_mart;

\c eas_e_mart;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS items;



CREATE table users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL unique,
  password_digest VARCHAR NOT NULL,
  phone_number VARCHAR(10),
  email TEXT NOT NULL,
  location TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
)

CREATE table categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  img_url TEXT,
)

CREATE table items (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  name VARCHAR (50),
  description TEXT,
  price VARCHAR (20),
  condition VARCHAR(10),
  quantity INTEGER,
);
