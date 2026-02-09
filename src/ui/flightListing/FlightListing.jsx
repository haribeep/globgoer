"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AirlineCard from './FlightCards';
import CustomTabSelector from '@/components/CustomTabSelector';

const FlightListing = ({ flights }) => {
  const [sortedFlights, setSortedFlights] = useState([]);

  useEffect(() => {
    setSortedFlights(flights);
  }, [flights]);

  const handleSort = (tabId) => {
    const dataToSort = [...sortedFlights];

    switch (tabId) {
      case "cheapest":
        dataToSort.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "fastest":
        const getMinutes = (timeStr) => {
          const parts = timeStr.match(/\d+/g);
          if (!parts) return 0;
          return parseInt(parts[0]) * 60 + (parts[1] ? parseInt(parts[1]) : 0);
        };
        dataToSort.sort((a, b) => getMinutes(a.duration) - getMinutes(b.duration));
        break;
      case "recommended":
      default:
        dataToSort.sort((a, b) => (a.id || 0) - (b.id || 0));
        break;
    }
    setSortedFlights(dataToSort);
  };

  if (!sortedFlights || sortedFlights.length === 0) {
    return (
      <Box 
        sx={{ 
          p: 6, 
          textAlign: 'center', 
          bgcolor: '#fff', 
          borderRadius: 2, 
          boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' 
        }}
      >
        <Typography variant="h6" color="textSecondary">
          No flights found for this route.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Try adjusting your filters or selecting different dates.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2.5 } }}>
      <CustomTabSelector onTabChange={handleSort} />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 }, minWidth: 0 }}>
        {sortedFlights.map((item) => (
          <AirlineCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default FlightListing;