import React, { useRef } from "react";
import { Save, Delete } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

const styles = {
  Icon: {
    marginLeft: "auto",
    width: "10%",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

const EditItem = (props) => {
  const inputRef = useRef();
  return (
    <Grid xs={12} item key={props.index}>
      <Paper elevation={2} style={styles.Paper}>
        <form
          onSubmit={() => {
            props.saveTodo(props.index, inputRef.current.value);
          }}
          style={{ display: "flex" }}
        >
          <Input
            style={{ width: "90%" }}
            defaultValue={props.todo}
            inputRef={inputRef}
          />
          <IconButton
            type="submit"
            color="primary"
            aria-label="Add"
            style={styles.Icon}
          >
            <Save fontSize="small" />
          </IconButton>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditItem;
