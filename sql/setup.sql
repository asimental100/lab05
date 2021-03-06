DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  rating TEXT NOT NULL,
  price TEXT NOT NULL,
  in_stock BOOLEAN NOT NULL
);