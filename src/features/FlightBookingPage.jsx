"use client";
import React, { useState, useMemo } from "react";
import { Box, Typography, CircularProgress, Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import ToplevelFilterSection from "@/ui/toplevelFilter/ToplevelFilterSection";
import ActionCards from "@/ui/actionCards/ActionCards";
import AdvanceFilterSection from "@/ui/advanceFilter/AdvanceFilterSection";
import FlightListing from "@/ui/flightListing/FlightListing";
import { MASTER_FLIGHT_DATA } from "@/data/flight";


const FlightBooking = () => {

  const [baseResults, setBaseResults] = useState(MASTER_FLIGHT_DATA);
  const [advanceFilters, setAdvanceFilters] = useState(null);
  const [hasSearched, setHasSearched] = useState(true);
  const [loading, setLoading] = useState(false);


  const parseTimeToHours = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours + minutes / 60;
  };

 
  const handleSearch = (criteria) => {
    setLoading(true);
    setHasSearched(false);
    setAdvanceFilters(null); 

    setTimeout(() => {
      const results = MASTER_FLIGHT_DATA.filter((flight) => {
        const searchOrigin = (criteria.origin || "").toLowerCase();
        const searchDest = (criteria.destination || "").toLowerCase();
        const searchClass = (criteria.cabinClass || "").toLowerCase();

        return (
          (!searchOrigin || flight.originAirport.toLowerCase().includes(searchOrigin)) &&
          (!searchDest || flight.destAirport.toLowerCase().includes(searchDest)) &&
          (!searchClass || flight.cabinClass.toLowerCase() === searchClass)
        );
      });

      setBaseResults(results);
      setLoading(false);
      setHasSearched(true);
    }, 800);
  };

  const handleApplyAdvanceFilters = (filters) => {
    setAdvanceFilters(filters);
  };

  

const finalFilteredFlights = useMemo(() => {
 
  if (!baseResults || baseResults.length === 0) {
    return [];
  }


  if (!advanceFilters || (
    (!advanceFilters.stops || advanceFilters.stops.length === 0) &&
    (!advanceFilters.airlines || advanceFilters.airlines.length === 0) &&
    (!advanceFilters.departureTime || (advanceFilters.departureTime[0] === 0 && advanceFilters.departureTime[1] === 24)) &&
    (!advanceFilters.arrivalTime || (advanceFilters.arrivalTime[0] === 0 && advanceFilters.arrivalTime[1] === 24))
  )) {
    return baseResults;
  }

  return baseResults.filter((flight) => {
  
    if (advanceFilters.departureTime && (advanceFilters.departureTime[0] !== 0 || advanceFilters.departureTime[1] !== 24)) {
      const flightDepartureHours = parseTimeToHours(flight.departureTime);
      const [minDeparture, maxDeparture] = advanceFilters.departureTime;
      if (flightDepartureHours < minDeparture || flightDepartureHours > maxDeparture) {
        return false;
      }
    }


    if (advanceFilters.arrivalTime && (advanceFilters.arrivalTime[0] !== 0 || advanceFilters.arrivalTime[1] !== 24)) {
      const flightArrivalHours = parseTimeToHours(flight.arrivalTime);
      const [minArrival, maxArrival] = advanceFilters.arrivalTime;
      if (flightArrivalHours < minArrival || flightArrivalHours > maxArrival) {
        return false;
      }
    }

    
    if (advanceFilters.stops && advanceFilters.stops.length > 0) {
      if (!advanceFilters.stops.includes(flight.stops)) {
        return false;
      }
    }

 
    if (advanceFilters.airlines && advanceFilters.airlines.length > 0) {
      if (!advanceFilters.airlines.includes(flight.airlineName)) {
        return false;
      }
    }

    return true;
  });
}, [baseResults, advanceFilters]);


  return (
    <Box sx={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", bgcolor: "#f5f5f5" }}>
   
      <Navbar />


      <Box sx={{ mt: 2 }}>
        <ToplevelFilterSection onSearch={handleSearch} />
      </Box>

    
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 }, flex: 1 }}>
        <Box sx={{ display: "flex", gap: { xs: 2, md: 2 }, alignItems: "flex-start", flexDirection: { xs: "column", md: "row" } }}>
       
          <Box sx={{ width: { xs: "100%", md: "260px" }, flexShrink: 0, order: { xs: 2, md: 1 } }}>
            <AdvanceFilterSection onApplyFilters={handleApplyAdvanceFilters} />
          </Box>

         
          <Box sx={{ flex: 1, minWidth: 0, order: { xs: 1, md: 2 } }}>
            {loading ? (
              <Box sx={{ textAlign: "center", mt: 10, py: 8 }}>
                <CircularProgress sx={{ color: "#482A89", mb: 2 }} size={50} />
                <Typography variant="h6" sx={{ color: "#333", fontWeight: 500 }}>
                  Searching for best flights...
                </Typography>
              </Box>
            ) : hasSearched ? (
              <>
                {finalFilteredFlights.length > 0 ? (
                  <>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "#333", fontSize: { xs: "16px", md: "18px" } }}>
                      {finalFilteredFlights.length} Flights Found
                    </Typography>
                    <FlightListing flights={finalFilteredFlights} />
                  </>
                ) : (
                  <Box sx={{ p: { xs: 3, md: 6 }, textAlign: "center", bgcolor: "#fff", borderRadius: 2, boxShadow: "0px 2px 8px rgba(0,0,0,0.08)" }}>
                    <Typography variant="h6" sx={{ color: "#333", fontWeight: 600, mb: 1, fontSize: { xs: "14px", md: "16px" } }}>
                      No flights found
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                      Try adjusting your filters or search criteria.
                    </Typography>
                  </Box>
                )}
              </>
            ) : (
              <Box
                sx={{
                  p: { xs: 3, md: 8 },
                  textAlign: "center",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  border: "2px dashed #d0d7de",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <Typography variant="h5" sx={{ color: "#666", fontWeight: 600, mb: 1, fontSize: { xs: "18px", md: "24px" } }}>
                  Start searching for flights
                </Typography>
                <Typography color="textSecondary" sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                  Enter your origin, destination, travel dates, and number of travelers to see available flights.
                </Typography>
              </Box>
            )}
          </Box>

        
          <Box sx={{ width: { xs: "100%", md: "260px" }, flexShrink: 0, display: { xs: "none", lg: "block" }, order: { xs: 3, md: 3 } }}>
            <ActionCards />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FlightBooking;