import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import {
  TextField,
  Popover,
  Box,
  InputAdornment,
  Typography,
  Divider,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function SingleFieldRangePicker() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleStartChange = (newValue) => {
    setStart(newValue);

    if (end && newValue && newValue.isAfter(end)) {
      setEnd(null);
    }
  };

  const handleEndChange = (newValue) => {
    setEnd(newValue);
    if (start) {
      setTimeout(handleClose, 200);
    }
  };

  const displayValue =
    start && end
      ? `${dayjs(start).format("MMM DD")} - ${dayjs(end).format(
          "MMM DD, YYYY"
        )}`
      : "";

  const getPlaceholder = () => {
    if (!start) return "Departure - Return";
    if (!end) return `${dayjs(start).format("MM/DD/YYYY")} - Return`;
    return "";
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: "100%", maxWidth: 400 }}>
      <TextField
  fullWidth
  readOnly
  size="small"
  placeholder={getPlaceholder()}
  value={displayValue}
  onClick={handleClick}
  sx={{
    width: "291px",
    height: "48px",
    "& .MuiInputBase-root": {
      height: "48px",
      cursor: "pointer",
      backgroundColor: "#fff",
      borderRadius: "4px",
      padding: "8px 12px",
      gap: "8px",
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      "& fieldset": {
        borderWidth: "1px !important",
        borderColor: "#E2E8F0",
      },
    },
    "& .MuiOutlinedInput-input": {
      cursor: "pointer",
      padding: 0,
      lineHeight: "100%",
    },
    "& .MuiInputBase-input::placeholder": {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "100%",
      letterSpacing: "0%",
      color: "Gray", // Grey placeholder text
      opacity: 1,
      verticalAlign: "middle",
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start" sx={{ margin: 0 }}>
        <CalendarTodayIcon
          sx={{ 
            fontSize: "18px", 
            color: "#482A89"
          }} 
        />
      </InputAdornment>
    ),
  }}
/>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          PaperProps={{
            sx: { borderRadius: 2, mt: 1, boxShadow: 3 },
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Box sx={{ p: 1 }}>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                Departure
              </Typography>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={start}
                onChange={handleStartChange}
                slotProps={{ actionBar: { actions: [] } }}
              />
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <Box sx={{ p: 1 }}>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                Return
              </Typography>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={end}
                minDate={start || undefined}
                onChange={handleEndChange}
                slotProps={{ actionBar: { actions: [] } }}
              />
            </Box>
          </Box>
        </Popover>
      </Box>
    </LocalizationProvider>
  );
}
