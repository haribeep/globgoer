import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const AirlineFilter = () => {
  const [selectedStops, setSelectedStops] = React.useState([]);

  const handleStopChange = (id) => {
    setSelectedStops((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const headerStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#1A1A1A",
  };

  const checkboxLabelStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 400, 
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#000000",
    display: "flex",
    alignItems: "center", 
  };


  const priceStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    color: "#000000",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography sx={headerStyle}>Airlines</Typography>
        <Typography sx={headerStyle}>From</Typography>
      </Box>

      <FormGroup sx={{ gap: "8px" }}>
        {stopFilters.map((filter) => (
          <Box
            key={filter.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "32px",
            }}
          >
            <FormControlLabel
              sx={{
                margin: 0,
                "& .MuiFormControlLabel-label": { width: "100%" },
              }}
              control={
                <Checkbox
                  checked={selectedStops.includes(filter.id)}
                  onChange={() => handleStopChange(filter.id)}
                  sx={{
                    p: "4px",
                    mr: "8px",
                    color: "#E0E0E0",
                    "&.Mui-checked": { color: "#5D36AF" },
                  }}
                />
              }
              label={
                <Typography sx={checkboxLabelStyle}>{filter.label}</Typography>
              }
            />
            <Typography sx={priceStyle}>{filter.price}</Typography>
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

export default AirlineFilter;

const stopFilters = [
  { id: "abc_air", label: "ABC Air lines", price: "$450" },
  { id: "abc_technologies", label: "ABC Tech", price: "$520" },
  { id: "EDF", label: "EDF", price: "$610" },
];
