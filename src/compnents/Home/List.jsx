import React from "react";
import Todo from "./ToDo";
import EditItem from "./EditItem";
import { Grid } from "@mui/material";

const List = (props) => {
  const renderTodo = (key) => {
    if (props.list[key] == null) return null;
    if (props.list[key]["status"] === "active") {
      return (
        <Todo
          key={key}
          index={key}
          todo={props.list[key]["todo"]}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
          saveMultiChecked={props.saveMultiChecked}
          removeMultiChecked={props.removeMultiChecked}
        />
      );
    } else if (props.list[key]["status"] === "editing") {
      return (
        <EditItem
          key={key}
          index={key}
          todo={props.list[key]["todo"]}
          saveTodo={props.saveTodo}
        />
      );
    }
  };

  return (
    <Grid container>
      {Object.keys(props.list).map((key) => renderTodo(key))}
    </Grid>
  );
};

export default List;
