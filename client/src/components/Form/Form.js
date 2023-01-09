import React, { useState } from "react";
import { Paper, TextField, Button, Select, MenuItem } from "@mui/material";

import { useAnimals } from "../../context/AnimalContext";
import "./Form.css";

const initialFormValues = {
  // type: ANIMAL_TYPE_OPTIONS[0].value,
  name: "",
  // age: "",
  imageUrl: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { addNewAnimal } = useAnimals();

  const handleChange = (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewAnimal(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <Paper
      sx={{ width: "600px", height: "300px", marginX: "auto" }}
      elevation={3}
    >
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <TextField
            value={formValues["name"]}
            onChange={handleChange}
            name="name"
            type="text"
            variant="outlined"
            label="Name"
            required
          />
        </div>
        <div className="form-column">
          <TextField
            value={formValues["imageUrl"]}
            onChange={handleChange}
            name="imageUrl"
            type="text"
            variant="outlined"
            label="Image"
            required
          />
        </div>
        <Button type="submit" variant="contained">
          Add Animal
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
