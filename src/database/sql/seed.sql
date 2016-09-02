DROP DATABASE IF EXISTS contacts;
CREATE DATABASE contacts;

\c contacts

CREATE TABLE contact_list (
  id serial PRIMARY KEY,
  first_name varchar,
  last_name varchar,
  telephone_number int,
  eye_color varchar,
  date_of_birth varchar
);
