import { Box } from "@mui/material";
import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
  },
}));

const Todos = ({ todos, setTodos }) => {
  const classes = useStyles();

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => id !== todo.id));
  };
  return (
    <Box className={classes.todos}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </Box>
  );
};

export default Todos;
