import React from "react";
import { Button } from "@mui/material";

function CustomButton({ label, icon: Icon, onClick, variant = "contained", color = "primary", ...props }) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      startIcon={Icon ? <Icon /> : null}
      {...props}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
