import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";

const styles = {
  Icon: {
    marginLeft: "auto",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

const ToDo = ({
  updateTodo,
  deleteTodo,
  index,
  todo,
  saveMultiChecked,
  removeMultiChecked,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event, index) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    if (event.target.checked) {
      saveMultiChecked(index);
    } else {
      removeMultiChecked(index);
    }
  };
  const deleteTodoitem = () => {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 500);
    });

    promise.then(() => deleteTodo(index));
  };
  return (
    <Grid xs={12} item key={index}>
      <Paper elevation={2} style={styles.Paper}>
        <span style={styles.Todo}>{todo}</span>
        <IconButton
          color="primary"
          aria-label="Edit"
          style={styles.Icon}
          onClick={() => updateTodo(index)}
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Delete"
          onClick={deleteTodoitem}
        >
          <Delete fontSize="small" />
        </IconButton>
        <Checkbox
          checked={checked}
          onChange={(e) => handleChange(e, index)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Paper>
    </Grid>
  );
};

export default ToDo;
