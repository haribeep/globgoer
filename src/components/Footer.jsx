"use client";

import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "1440px",
        height: "96px",
        backgroundColor: "#A27443",
        borderTop: "1px solid",
        borderColor: "divider",
        paddingTop: "16px",
        paddingBottom: "16px",
        px: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "17px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "#fff" }} aria-label="Facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} aria-label="Instagram" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} aria-label="Twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
          </Stack>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
            Globe Goer
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" align="right">
          {"©"}

          {" 2023 Globe Goer Inc "}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
