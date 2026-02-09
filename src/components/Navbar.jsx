"use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "none",
        color: "#333",
        width: "100%",
        height: "84px",
        boxShadow: "0px 4px 4px rgba(141, 141, 141, 0.25)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "16px",
          paddingRight: "32px",
          paddingBottom: "16px",
          paddingLeft: "32px",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Segoe UI, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#482A89",
          }}
        >
          Glob Goer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
