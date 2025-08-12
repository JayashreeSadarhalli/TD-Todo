import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography>
        This is a simple Todo application built with React, Material UI, and React Router.
        It lets you add, complete, and delete tasks while toggling between light and dark modes.
      </Typography>
    </Layout>
  );
}
