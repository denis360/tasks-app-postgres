CREATE DATABASE database_tasks;

CREATE TABLE tasks(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	description TEXT
);

