"use client";
import React, { useState } from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomDropdown = ({ label, options = [], defaultValue, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(defaultValue || label);

  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
    handleClose();
  };

  const fontStyle = {
    fontFamily: "Abel, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    color: selected === label ? "#757575" : "#27273F", 
    textTransform: "none",
    width: "151px",
    height: "38px",
    borderRadius: "4px",
    border: "1px solid #D1D1D1",
    justifyContent: "space-between",
    px: 1.5,
    "&:hover": {
      borderColor: "#27273F",
      backgroundColor: "rgba(39, 39, 63, 0.04)",
    },
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon sx={{ color: "#27273F" }} />}
        sx={fontStyle}
      >
        {selected}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        PaperProps={{
          sx: {
            width: "151px",
            marginTop: "4px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleSelect(option)}
            sx={{
              fontFamily: "Abel, sans-serif",
              fontSize: "14px",
              color: "#27273F",
              "&:hover": { backgroundColor: "#F3F3F3" },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CustomDropdown;