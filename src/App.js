import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { Typography } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: theme.palette.background,
    padding: theme.spacing(2),
  }
}))

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <CssBaseline />
      <Typography
        letterSpacing="1px"
        variant="h5"
        component="h1"
        color="#ffffff"
        textAlign="center"
        gutterBottom
      >
        What's the plan for today?
      </Typography>
      <TodoForm setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <Todos todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
