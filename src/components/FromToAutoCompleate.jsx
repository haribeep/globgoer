"use client"
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Autocomplete,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

const locations = [
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "London, UK",
  "Dubai, UAE",
  "Mumbai, India",
  "Singapore",
];

const FromToAutocomplete = ({ onChange }) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  
  useEffect(() => {
    if (onChange) {
      onChange(from, to);
    }
  }, [from, to, onChange]);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const textFieldStyle = {
    width: "190px",
    "& .MuiOutlinedInput-root": {
      height: "48px",
      backgroundColor: "#F8FAFC",
      fontFamily: "Segoe UI, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      borderRadius: "4px",
      border: "1px solid #E2E8F0",
      padding: "8px 12px",
      "& fieldset": {
        borderColor: "#E2E8F0",
        border: "none",
      },
      "&:hover fieldset": {
        borderColor: "#A1B0CC",
        border: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#27273F",
        border: "none",
      },
    },
    "& .MuiInputBase-input": {
      fontFamily: "Segoe UI, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      verticalAlign: "middle",
      "&::placeholder": {
        fontSize: "16px",
        color: "#94A3B8",
        opacity: 1,
      },
    },
  };

  return (
    <Box display="flex" alignItems="center" width="100%" gap={1}>

      <Box flex={1}>
        <Autocomplete
          options={locations}
          value={from}
          onChange={(e, newValue) => setFrom(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Where from?"
              variant="outlined"
              sx={textFieldStyle}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon sx={{ color: "#94A3B8", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>


  <IconButton
    onClick={handleSwap}
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "4px",
      backgroundColor: "#F2EAFF",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      "&:hover": { backgroundColor: "#F2EAFF" },
    }}
  >
    <SwapHorizIcon sx={{ color: "#94A3B8", fontSize: 20 }} />
  </IconButton>

  
  <Box flex={1}>
    <Autocomplete
      options={locations}
      value={to}
      onChange={(e, newValue) => setTo(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Where to?"
          variant="outlined"
          sx={textFieldStyle}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <FlightLandIcon sx={{ color: "#94A3B8", fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  </Box>
</Box>

  );
};

export default FromToAutocomplete;