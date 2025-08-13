import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        width: "2000px",
      }}
    >
      <Header />
      <Container
        sx={{
          mt: 4,
          display: "flex",
          width: "2000px",
          justifyContent: "center", // centers horizontally
        }}
      >
        {children}
      </Container>
    </Container>
  );
}
