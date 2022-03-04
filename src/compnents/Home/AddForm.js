import React, { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const AddForm = ({ addToList }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    console.log(inputRef.current.value);
    e.preventDefault();

    addToList(inputRef.current.value);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <Input
        placeholder="Add Todo"
        inputProps={{
          "aria-label": "Description",
        }}
        inputRef={inputRef}
        style={{ width: "90%", border: "solid 1px #1976D2" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "10%", marginLeft: "10px" }}
      >
        Add
      </Button>
    </form>
  );
};

export default AddForm;
