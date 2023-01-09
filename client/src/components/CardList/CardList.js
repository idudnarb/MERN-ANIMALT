import React from "react";
import { useAnimals } from "../../context/AnimalContext";
import Card from "../Card/Card";
import { Grid } from "@mui/material";

const CardList = () => {
  const { animals } = useAnimals();

  return (
    <Grid sx={{ marginTop: 2 }} container spacing={5}>
      {animals.map((animal) => (
        <Grid key={animal.id} item xs={12} sm={6} md={4} lg={3}>
          <Card key={animal.id} animal={animal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
