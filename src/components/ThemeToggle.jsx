import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
}
