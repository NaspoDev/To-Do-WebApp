// Backend server for our To-Do app.

// load environment variables
require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

// routes
app.get("/", (req, res) => {
  res.send("Try /users or /tasks!");
});

const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));
