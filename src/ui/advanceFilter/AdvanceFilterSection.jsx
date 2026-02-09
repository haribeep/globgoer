"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Slider,
} from "@mui/material";

const AdvanceFilterSection = ({ onApplyFilters }) => {
  const [departureTime, setDepartureTime] = useState([0, 24]);
  const [arrivalTime, setArrivalTime] = useState([0, 24]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedBaggage, setSelectedBaggage] = useState([]);

  const airlines = [
    { name: "Emirates", priceRange: "$150" },
    { name: "Qatar Airways", priceRange: "$130" },
    { name: "British Airways", priceRange: "$180" },
    { name: "Singapore Airlines", priceRange: "$200" },
    { name: "Lufthansa", priceRange: "$140" },
  ];
  const stops = [
    { label: "Direct", value: 0, priceRange: "$0 - $500" },
    { label: "1 Stop", value: 1, priceRange: "$500 - $1200" },
    { label: "2+ Stops", value: 2, priceRange: "$1200 - $2000" },
  ];
  const baggageOptions = [
    { label: "Cabin Baggage Only", value: "cabin", priceRange: "$0" },
    { label: "Cabin + 1 Checked", value: "1checked", priceRange: "$25" },
    { label: "Cabin + 2 Checked", value: "2checked", priceRange: "$50" },
  ];

  const handleStop = (value) => {
    setSelectedStops((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    );
  };

  const handleAirline = (airline) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((a) => a !== airline)
        : [...prev, airline],
    );
  };

  const handleBaggage = (baggage) => {
    setSelectedBaggage((prev) =>
      prev.includes(baggage)
        ? prev.filter((b) => b !== baggage)
        : [...prev, baggage],
    );
  };

  const applyFilters = () => {
    onApplyFilters({
      departureTime,
      arrivalTime,
      stops: selectedStops,
      airlines: selectedAirlines,
      baggage: selectedBaggage,
    });
  };

  const resetFilters = () => {
    setDepartureTime([0, 24]);
    setArrivalTime([0, 24]);
    setSelectedStops([]);
    setSelectedAirlines([]);
    setSelectedBaggage([]);
    onApplyFilters({
      departureTime: [0, 24],
      arrivalTime: [0, 24],
      stops: [],
      airlines: [],
      baggage: [],
    });
  };

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "12px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e0e0e0",
        bgcolor: "#fff",
        position: "sticky",
        top: "100px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontWeight: 700, fontSize: "16px", color: "#333", mb: 3 }}
      >
        Filter by
      </Typography>

      <Box sx={{ flex: 1, overflowY: "auto", pr: 1.5, mb: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              Stops
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              From
            </Typography>
          </Box>
          {stops.map((stop) => (
            <Box
              key={stop.value}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedStops.includes(stop.value)}
                    onChange={() => handleStop(stop.value)}
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": { color: "#482A89" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px", color: "#666" }}>
                    {stop.label}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
              <Typography sx={{ fontSize: "12px", color: "#94A3B8" }}>
                {stop.priceRange}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              Airlines
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              From
            </Typography>
          </Box>
          {airlines.map((airline) => (
            <Box
              key={airline.name}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedAirlines.includes(airline.name)}
                    onChange={() => handleAirline(airline.name)}
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": { color: "#482A89" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px", color: "#666" }}>
                    {airline.name}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
              <Typography sx={{ fontSize: "12px", color: "#94A3B8" }}>
                {airline.priceRange}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              Travel and Baggage
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              From
            </Typography>
          </Box>
          {baggageOptions.map((option) => (
            <Box
              key={option.value}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedBaggage.includes(option.value)}
                    onChange={() => handleBaggage(option.value)}
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": { color: "#482A89" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "13px", color: "#666" }}>
                    {option.label}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
              <Typography sx={{ fontSize: "12px", color: "#94A3B8" }}>
                {option.priceRange}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 2, pt: 3, borderTop: "1px solid #e0e0e0" }}>
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              Departure Time
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "12px", color: "#94A3B8" }}
            >
              {departureTime[0]}:00 - {departureTime[1]}:00
            </Typography>
          </Box>
          <Slider
            value={departureTime}
            onChange={(e, newValue) => setDepartureTime(newValue)}
            min={0}
            max={24}
            step={1}
            valueLabelDisplay="auto"
            marks={[
              { value: 0, label: "12 AM" },
              { value: 6, label: "6 AM" },
              { value: 12, label: "12 PM" },
              { value: 18, label: "6 PM" },
              { value: 24, label: "12 AM" },
            ]}
            sx={{
              color: "#482A89",
              "& .MuiSlider-thumb": {
                backgroundColor: "#482A89",
                boxShadow: "0px 2px 6px rgba(72, 42, 137, 0.3)",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#482A89",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#E2E8F0",
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,

              
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}
            >
              Arrival Time
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "12px", color: "#94A3B8" }}
            >
              {arrivalTime[0]}:00 - {arrivalTime[1]}:00
            </Typography>
          </Box>
          <Slider
            value={arrivalTime}
            onChange={(e, newValue) => setArrivalTime(newValue)}
            min={0}
            max={24}
            step={1}
            valueLabelDisplay="auto"
            marks={[
              { value: 0, label: "12 AM" },
              { value: 6, label: "6 AM" },
              { value: 12, label: "12 PM" },
              { value: 18, label: "6 PM" },
              { value: 24, label: "12 AM" },
            ]}
            sx={{
              color: "#482A89",
              "& .MuiSlider-thumb": {
                backgroundColor: "#482A89",
                boxShadow: "0px 2px 6px rgba(72, 42, 137, 0.3)",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#482A89",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#E2E8F0",
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
         <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            flex: 1,
            borderColor: "#d0d7de",
            color: "#666",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
            py: 1.2,
            "&:hover": {
              borderColor: "#482A89",
              color: "#482A89",
              bgcolor: "#f0f5ff",
            },
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={applyFilters}
          sx={{
            width: "131px",
            height: "45px",

            backgroundColor: "#482A89",
            color: "#fff",
            opacity: 1,

            textTransform: "none",
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",

            padding: "12px 20px",

            borderRadius: "4px",

            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#3a1f6f",
              boxShadow: "0px 4px 12px rgba(72, 42, 137, 0.2)",
            },
          }}
        >
          Apply Filter
        </Button>
       
      </Box>
    </Card>
  );
};

export default AdvanceFilterSection;
