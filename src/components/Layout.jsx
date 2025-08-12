import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
   <Header />
<Container
  sx={{
    mt: 4,
    display: "flex",
    justifyContent: "center", // centers horizontally
  }}
>
  {children}
</Container>
    </>
  );
}
