import React from "react";
import { Box, Typography, Slider, styled } from "@mui/material";

const CustomSlider = styled(Slider)({
  color: "#5D36AF", 
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#5D36AF",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const TimeSlider = ({ title, value, onChange }) => {
  
  const formatTime = (val) => {
    const hours = Math.floor(val);
    const minutes = val % 1 === 0 ? "00" : "30";
    const ampm = hours >= 12 ? "PM" : "AM";
    const h = hours % 12 || 12;
    return `${h}:${minutes} ${ampm}`;
  };

  return (
    <Box sx={{ mb: 4, width: "100%" }}>
      <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#333", mb: 0.5 }}>
        {title}
      </Typography>
      
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography sx={{ fontSize: "12px", color: "#5D36AF", fontWeight: 600 }}>
          {formatTime(value[0])}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#5D36AF", fontWeight: 600 }}>
          {formatTime(value[1])}
        </Typography>
      </Box>

      <Box sx={{ px: 1 }}>
        <CustomSlider
          value={value}
          onChange={(e, newVal) => onChange(newVal)}
          min={0}
          max={24}
          step={0.5}
          valueLabelDisplay="auto"
          valueLabelFormat={formatTime}
        />
      </Box>
    </Box>
  );
};

export default TimeSlider;