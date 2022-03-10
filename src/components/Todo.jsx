import { Box, Fab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";

const useStyles = makeStyles((theme) => ({
  todoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    color: "#fff",
    padding: theme.spacing(1),
    margin: "8px 0",
    borderRadius: "5px",
    "&:nth-child(2n + 1)": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:nth-child(2n + 2)": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  todo: {
    width: "100%",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },

  icon: {
    cursor: "pointer",
    margin: "0 4px",
  },
}));

const Todo = ({ todo, deleteTodo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.todoRow}>
      <Box className={classes.todo}>{todo.title}</Box>
      <Box className={classes.buttons}>
        <EditRoundedIcon fontSize="small" className={classes.icon} />
        <CloseRoundedIcon
          fontSize="small"
          className={classes.icon}
          onClick={() => deleteTodo(todo.id)}
        />
      </Box>
    </Box>
  );
};

export default Todo;
