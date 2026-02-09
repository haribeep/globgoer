import React from "react";
import { Card, Box, Typography, Button, Divider } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import Image from "next/image";

const AirlineCard = ({ item, onButtonClick }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "800px" },
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="/images/globe-airplane.svg" alt="Logo" width={36} height={36} />
          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            {item?.airlineName || "Global Airlines"}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: "13px", color: "#333" }}>
          {item?.cabinClass || "Economy"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#FFF1E4",
            padding: "8px 12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            borderRadius: "4px",
          }}
        >
          <Typography sx={{ position: "absolute", top: "4px", left: "8px", fontSize: "11px", color: "#666" }}>
            {item?.departureDate || "Mon, 12 Feb"}
          </Typography>

          <Box sx={{ textAlign: "left", flex: 1, mt: 1.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>{item?.departureTime}</Typography>
            <Typography sx={{ fontSize: "12px", color: "#333" }}>{item?.originAirport}</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, mt: 1.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{item?.duration}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, width: '100%' }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: "#E0E0E0" }} />
              <FlightIcon sx={{ transform: "rotate(90deg)", color: "#E0E0E0", fontSize: 16 }} />
              <Box sx={{ flex: 1, height: "1px", bgcolor: "#E0E0E0" }} />
            </Box>
          </Box>

          <Box sx={{ textAlign: "right", flex: 1, mt: 1.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>{item?.arrivalTime}</Typography>
            <Typography sx={{ fontSize: "12px", color: "#333" }}>{item?.destAirport}</Typography>
          </Box>
        </Box>

        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            minWidth: "131px", 
            gap: "12px" 
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700, 
              fontSize: "24px", 
              lineHeight: "100%", 
              letterSpacing: "0%",
              color: "#000000",
              m: 0,
              p: 0,
              textAlign: "center"
            }}
          >
            ${item?.price || "0"}
          </Typography>

          <Button 
            variant="contained" 
            onClick={onButtonClick}
            sx={{ 
              width: "131px",
              height: "45px",
              backgroundColor: "#482A89", 
              color: "#fff",
              textTransform: "none", 
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "4px",
              padding: "12px 20px",
              "&:hover": { backgroundColor: "#3a1f6f" }
            }}
          >
            Book now
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 0.5, borderColor: "#F0F0F0" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 1 }}>
        <Typography sx={{ 
            fontFamily: "'Segoe UI', sans-serif", 
            fontWeight: 400, 
            fontSize: "14px", 
            lineHeight: "100%", 
            letterSpacing: "0%",
            color: "#666",
            m: 0
          }}>
          {item?.baggage || "20kg Baggage"}
        </Typography>

        <Typography sx={{ 
            fontFamily: "'Segoe UI', sans-serif", 
            fontWeight: 400, 
            fontSize: "14px", 
            lineHeight: "100%", 
            letterSpacing: "0%",
            color: "#2E7D32", 
            m: 0,
            p: 0
          }}>
          {item?.refundStatus || "Partially Refundable"}
        </Typography>

        <Button 
          sx={{ 
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 600,
            fontSize: "14px", 
            lineHeight: "100%", 
            letterSpacing: "0%",
            textTransform: "none", 
            color: "#482A89", 
            p: 0,
            minWidth: "auto",
            "&:hover": { bgcolor: "transparent", textDecoration: "underline" }
          }}
        >
          Flight Details
        </Button>
      </Box>
    </Card>
  );
};

export default AirlineCard;