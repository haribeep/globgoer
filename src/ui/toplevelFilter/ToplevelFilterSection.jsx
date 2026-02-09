"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomDropdown from "@/components/Customdropown";
import FromToAutocomplete from "@/components/FromToAutoCompleate";
import CustomDatePicker from "@/components/CustomDatePicker";
import TravellerSelector from "@/components/TravellerSelector";
import CustomButton from "@/components/CustomButton";
import SearchIcon from '@mui/icons-material/Search';

const ToplevelFilterSection = ({ onSearch }) => {
  
  const [tripType, setTripType] = useState("One Way");
  const [flightType, setFlightType] = useState("Domestic");
  const [cabinClass, setCabinClass] = useState("Economy");
  
  
  const [searchData, setSearchData] = useState({
    origin: null,
    destination: null,
    date: new Date(),
    travellers: { adults: 1, children: 0, infants: 0 }
  });


  const tripOptions = ["One Way", "Round Trip", "Multi City"];
  const flightOptions = ["Domestic", "International"];
  const classOptions = ["Economy", "Premium Economy", "Business", "First Class"];

  
  const handleSearchClick = () => {
  
  onSearch({
    origin: searchData.origin,
    destination: searchData.destination,
    cabinClass: cabinClass,
    tripType: tripType
  });
};

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        py: 3,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
       
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
         <CustomDropdown
            label="Select Flight"
            options={flightOptions}
            value={flightType}
            onChange={(val) => setFlightType(val)}
          />
         
          <CustomDropdown
            label="Select Trip"
            options={tripOptions}
            value={tripType}
            onChange={(val) => setTripType(val)}
          />

          

          <CustomDropdown
            label="Select Class"
            options={classOptions}
            value={cabinClass}
            onChange={(val) => setCabinClass(val)}
          />
        </Box>

        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: { xs: "stretch", md: "flex-end" },
          }}
        >
          <Box sx={{ flex: 1.5 }}>
            <FromToAutocomplete 
              onChange={(origin, dest) => setSearchData(prev => ({ ...prev, origin, destination: dest }))}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <CustomDatePicker 
              isRoundTrip={tripType === "Round Trip"}
              onChange={(date) => setSearchData(prev => ({ ...prev, date }))}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <TravellerSelector 
              onChange={(travellers) => setSearchData(prev => ({ ...prev, travellers }))}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <CustomButton
              label="Search"
              icon={SearchIcon}
              onClick={handleSearchClick}
              sx={{
                width: "113px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "12px 20px",
                borderRadius: "4px",
                backgroundColor: "#482A89",
                color: "#fff",
                textTransform: "none",
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#3a1f6f",
                  boxShadow: "0px 4px 12px rgba(72, 42, 137, 0.3)",
                  transform: "translateY(-2px)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToplevelFilterSection;