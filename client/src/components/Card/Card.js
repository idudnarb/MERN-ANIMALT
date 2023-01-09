import React, { useState } from "react";
import {
  Card as CardWrapper,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Card.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useAnimals } from "../../context/AnimalContext";
import DeleteSweepSharpIcon from "@mui/icons-material/DeleteSweepSharp";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
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

  const [open, setOpen] = React.useState(false);
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
        </Typography>

        <Stack spacing={2} direction="row">
          {/* <Button onClick={deleteAnimal} variant="contained">
            Contained
          </Button> */}

          <IconButton
            onClick={deleteAnimal}
            sx={{ color: "red", margin: "5px 0 0 25px" }}
          >
            <DeleteSweepSharpIcon />
          </IconButton>

          <div>
            <Button
              onClick={handleOpen}
              sx={{ color: "blue", margin: "5px 0 0 25px" }}
            >
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
          </div>
        </Stack>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
