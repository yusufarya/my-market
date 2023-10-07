import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ position: "relative", bottom: 0, background: "lightblue" }}
    >
      <Toolbar>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
