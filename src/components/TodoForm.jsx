import React from "react";
import { Box, Fab, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: "600px",
    borderRadius: "16px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: theme.spacing(1),
  },
  textField: {
    width: "80%",
    marginRight: "16px",
    "& label": {
      color: "rgba(255,255,255,0.5)",
    },
    "& .css-1fghjlz-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "rgb(255,255,255)",
    },
    "& .css-4swifj-MuiInputBase-root-MuiInput-root": {
      color: "#fff",
    },
    "& .css-4swifj-MuiInputBase-root-MuiInput-root::before": {
      borderBottom: "2px solid rgba(255,255,255,0.7)",
    },
    "& .css-4swifj-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":
      {
        borderBottom: "2px solid #fff",
      },
  },
}));

const TodoForm = ({ setTodos, todo, setTodo }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      id: Math.floor(Math.random() * 1000),
      [name]: value,
      isCompleted: false,
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo({});
  };

  return (
    <Box className={classes.container}>
      <form className={classes.form} onSubmit={addTodo}>
        <TextField
          name="title"
          value={todo.title || ""}
          label="What's your task?"
          variant="standard"
          className={classes.textField}
          onChange={handleChange}
        />
        <Fab
          color="primary"
          type="submit"
          size="medium"
          sx={{ marginLeft: "16px" }}
        >
          <AddIcon />
        </Fab>
      </form>
    </Box>
  );
};

export default TodoForm;
