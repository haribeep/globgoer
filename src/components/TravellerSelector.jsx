import React, { useState } from "react";
import {
  TextField,
  Popover,
  Box,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // The Profile Icon

function TravellerSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (type, delta) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta), 
    }));
  };

  return (
    <>
    <TextField
      value="" 
      placeholder="Travellers"
      onClick={handleClick}
      readOnly
      size="small"
      sx={{
        width: "190px",
        height: "48px",
        opacity: 1,
        "& .MuiInputBase-root": {
          height: "48px",
          cursor: "pointer",
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "8px 12px",
          gap: "8px",
          "& fieldset": {
            borderWidth: "1px !important",
            borderColor: "#E2E8F0",
          },
        },
        "& .MuiInputBase-input::placeholder": {
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#94A3B8",
          opacity: 1, 
          verticalAlign: "middle",
        },
        "& .MuiInputLabel-root": { display: 'none' },
        "& .MuiOutlinedInput-notchedOutline": {
          legend: { display: 'none' }
        }
      }}
      InputProps={{
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start" sx={{ margin: 0 }}>
            <PersonOutlineIcon 
              sx={{ 
                color: "#94A3B8", 
                fontSize: "20px" 
              }} 
            />
          </InputAdornment>
        ),
      }}
    />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: { borderRadius: 2, mt: 1, boxShadow: 3 }
        }}
      >
        <Box sx={{ p: 2, width: 280 }}>
          {["adults", "children", "infants"].map((type) => (
            <Box
              key={type}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                '&:last-child': { mb: 0 }
              }}
            >
              <Box>
                <Typography sx={{ textTransform: "capitalize", fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {type}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {type === 'adults' ? 'Age 12+' : type === 'children' ? 'Age 2-12' : 'Under 2'}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 1 }}>
                <IconButton
                  size="small"
                  onClick={(e) => { e.stopPropagation(); handleChange(type, -1); }}
                  disabled={type === 'adults' ? travellers.adults <= 1 : travellers[type] <= 0}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                
                <Typography sx={{ mx: 1.5, minWidth: '15px', textAlign: 'center' }}>
                  {travellers[type]}
                </Typography>
                
                <IconButton
                  size="small"
                  onClick={(e) => { e.stopPropagation(); handleChange(type, 1); }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>
    </>
  );
}

export default TravellerSelector;