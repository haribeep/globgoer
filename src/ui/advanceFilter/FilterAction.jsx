import React from "react";
import { Box } from "@mui/material";
import CustomButton from "@/components/CustomButton";

const FilterActions = ({ onReset, onApply }) => {
  const commonTypography = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textTransform: "none",
    whiteSpace: "nowrap",
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        borderTop: "1px solid #E0E0E0",
        bgcolor: "#FFFFFF",
        position: "sticky",
        bottom: 0,
        zIndex: 10,
      }}
    >
      <CustomButton
        label="Reset"
        variant="text"
        onClick={onReset}
        sx={{
          flex: 1,
          height: "45px",
          borderRadius: "4px",
          color: "#482A89",
          ...commonTypography,
        }}
      />

      <CustomButton
        label="Apply Filters"
        variant="contained"
        onClick={onApply}
        sx={{
          width: "131px",
          height: "45px",
          pt: "12px",
          pr: "20px",
          pb: "12px",
          pl: "20px",
          borderRadius: "4px",
          opacity: 1,
          bgcolor: "#5D36AF",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...commonTypography,
          "&:hover": {
            bgcolor: "#492a8a",
            boxShadow: "0px 4px 8px rgba(93, 54, 175, 0.25)",
          },
        }}
      />
    </Box>
  );
};

export default FilterActions;
