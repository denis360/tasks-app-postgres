const { Pool } = require("pg");

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	password: "",
	database: "database_tasks",
	port: "5432"
});

const getTasks = async (req, res) => {
	const rows = await pool.query("select * from tasks");
	res.render("index", { tasks: rows.rows.reverse() });
};

const postTasks = async (req, res) => {
	const { name, description } = req.body;
	await pool.query("INSERT INTO tasks (name, description) VALUES ($1, $2)", [ name, description ]);
	res.redirect("/");
};

const deleteTasks = async (req, res) => {
	const id = req.params.id;
	await pool.query("DELETE FROM tasks WHERE id = $1", [ id ]);
	res.redirect("/");
};

const updateTasks = async (req, res) => {
	const id = req.params.id;
	const { name, description } = req.body;
	await pool.query("UPDATE tasks SET name = $1, description = $2 WHERE id = $3", [ name, description, id ]);
	res.redirect("/")
};

const updateTaks = async (req, res) => {
	const id = req.params.id;
	const rows = await pool.query("SELECT * FROM tasks WHERE id = $1", [ id ]);
	console.log(rows.rows)
	res.render("edit.hbs", { task: rows.rows[0] });
};

module.exports = {
	getTasks,
	postTasks,
	deleteTasks,
	updateTasks,
	updateTaks
};

