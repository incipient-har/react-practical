import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "./home.css";
import List from "./List";
import { Grid, Paper } from "@mui/material";
import AddForm from "./AddForm";
import Button from "@mui/material/Button";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
  },
};
const ToDomain = () => {
  const [list, setList] = useState({});
  const [checked, setChecked] = useState([]);

  const addToList = (todo) => {
    console.log(todo);
    let List = { ...list };
    List[`todo${Date.now()}`] = {
      todo: todo,
      status: "active",
    };

    setList({ ...List });
  };
  const deleteTodo = (key) => {
    let List = { ...list };
    List[key] = null;

    setList({ ...List });
  };
  const updateTodo = (key) => {
    let List = { ...list };
    List[key]["status"] = "editing";

    setList({ ...List });
  };
  const saveTodo = (key, todo) => {
    let List = { ...list };
    List[key] = {
      todo: todo,
      status: "active",
    };
    setList({ ...List });
  };
  const saveMultiChecked = (index) => {
    setChecked((prevState) => [...prevState, index]);
  };
  const removeMultiChecked = (item) => {
    var index = checked.indexOf(item);
    var arrayValue = [...checked];
    if (index !== -1) {
      delete arrayValue[index];
    }
    setChecked([...arrayValue]);
  };
  const deleteMultipleItem = () => {
    checked.forEach((element) => {
      deleteTodo(element);
    });
    setChecked([]);
  };
  return (
    <div>
      <AppBar position="static" className="main-header">
        <Typography variant="p">To Do List</Typography>
      </AppBar>
      <Grid className="container_grid" container spacing={0}>
        <Grid item xs={12}>
          <Paper style={styles.Paper}>
            <AddForm addToList={addToList} />
          </Paper>
        </Grid>
        <Grid item xs={12} style={styles.Paper}>
          <List
            deleteTodo={deleteTodo}
            list={list}
            updateTodo={updateTodo}
            saveTodo={saveTodo}
            saveMultiChecked={saveMultiChecked}
            removeMultiChecked={removeMultiChecked}
          />
        </Grid>
      </Grid>
      <div className="button_container">
        {checked.length > 0 && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            onClick={deleteMultipleItem}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
export default ToDomain;
