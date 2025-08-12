import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography>
        Oops! The page you're looking for doesn't exist.
      </Typography>
    </Layout>
  );
}
