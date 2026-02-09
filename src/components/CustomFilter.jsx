import React from "react";
import { 
  Box, 
  Typography, 
  FormGroup, 
  FormControlLabel, 
  Checkbox 
} from "@mui/material";

const FilterGroup = ({ title, options, selectedValues, onChange }) => {
  return (
    <Box sx={{ mb: 4, width: "250px" }}>
      <Typography 
        sx={{ 
          fontWeight: 700, 
          fontSize: "16px", 
          mb: 2, 
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}
      >
        {title}
      </Typography>
      
      <FormGroup>
        {options.map((option) => (
          <Box 
            key={option.id} 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              mb: 1 
            }}
          >
            <FormControlLabel
              control={
                <Checkbox 
                  checked={selectedValues.includes(option.id)}
                  onChange={() => onChange(option.id)}
                  sx={{
                    color: "#5D36AF",
                    "&.Mui-checked": { color: "#5D36AF" },
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: "14px", color: "#4F4F4F" }}>
                  {option.label}
                </Typography>
              }
            />
            {option.price && (
              <Typography sx={{ fontSize: "12px", color: "#828282" }}>
                from {option.price}
              </Typography>
            )}
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

export default FilterGroup;