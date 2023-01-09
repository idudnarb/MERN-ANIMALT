import React from "react";
import Layout from "./layout/Layout";
import Form from "./components/Form/Form";
import { Box } from "@mui/material";
import AnimalProvider from "./context/AnimalContext";
import CardList from "./components/CardList/CardList";

const App = () => {
  return (
    <Layout>
      <AnimalProvider>
        <Box>
          <Form />
          <CardList />
        </Box>
      </AnimalProvider>
    </Layout>
  );
};

export default App;
