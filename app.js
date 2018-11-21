import express from "express";
import db from "./db/db";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Get all todos
app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    todos: db
  });
});

//Get a single todo
app.get("/api/v1/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  db.map(todo => {
    if (todo.id === id) {
      return res.status(200).send({
        success: "true",
        message: "todo retrieved successfully",
        todo
      });
    }
  });
  return res.status(404).send({
    success: "false",
    message: "todo does not exist"
  });
});
const PORT = 5000;

// creating a server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
