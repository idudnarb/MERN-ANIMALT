import React, { useState } from "react";
import { useAnimals } from "../../context/AnimalContext";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";

import {
  Button,
  Card as CardWrapper,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Card.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialFormValues = {
  name: "",
  age: "",
};
const Card = ({ animal }) => {
  const { removeAnimal, editAnimalByIdandName } = useAnimals();
  const [editformValues, setEditFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    setEditFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editAnimalByIdandName(animal.id, editformValues.name, editformValues.age);
    setEditFormValues(editformValues);
    handleClose();
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteAnimal = () => {
    removeAnimal(animal.id);
  };

  return (
    <CardWrapper sx={{ maxWidth: "350px" }}>
      <CardMedia component="img" src={animal.imageUrl} height="150" />
      <CardContent>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          variant="h5"
        >
          {animal.name}
          <span className="card-title-type">Type: {animal.type}</span>
        </Typography>
        <Typography variant="p">Age: {animal.age} years old</Typography>
        <Stack>
          <Button
            onClick={deleteAnimal}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button onClick={handleOpen}>
            <EditIcon />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Animal
              </Typography>
              <Box
                onSubmit={handleSubmit}
                component="form"
                id="edit-modal-name-age"
                sx={{ mt: 2 }}
              >
                <TextField
                  onChange={handleChange}
                  name="name"
                  variant="outlined"
                  label="name"
                />
                <TextField
                  onChange={handleChange}
                  name="age"
                  type="number"
                  variant="outlined"
                  label="age"
                />
                <Button
                  type="submit"
                  variant="outlined"
                  size="medium"
                  sx={{ borderWidth: 0 }}
                >
                  <SaveIcon />
                </Button>
              </Box>
            </Box>
          </Modal>
        </Stack>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
