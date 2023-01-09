import React from "react";
import { Box, AppBar, Typography, Container } from "@mui/material";
import { red } from "@mui/material/colors";

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <AppBar sx={{ padding: 1, background: "red" }}>
        <Typography variant="h4">My Animals</Typography>
      </AppBar>
      <Container sx={{ marginTop: "70px" }}>{children}</Container>
    </Box>
  );
};

export default Layout;
