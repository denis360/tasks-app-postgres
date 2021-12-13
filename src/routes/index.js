const { Router } = require("express");
const router = Router();
const { getTasks, postTasks, deleteTasks, updateTasks, updateTaks } = require("../controllers/index.controller");

router.get("/", getTasks);

router.post("/tasks", postTasks)

router.get("/tasks/delete/:id", deleteTasks)

router.get("/tasks/:id", updateTaks)

router.post("/tasks/edit/:id", updateTasks)

module.exports = router;

