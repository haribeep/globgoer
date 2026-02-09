import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";

const CustomCard = ({
  onButtonClick,
  item,
}) => {
  return (
    <Card sx={{ 
      maxWidth: { xs: "100%", sm: "280px", md: "345px" }, 
      borderRadius: 3, 
      boxShadow: 3 ,
      marginBottom: { xs: 2, md: 5 },
      overflow: "hidden",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: 4,
        transform: "translateY(-4px)",
      }
    }}>
      {/* Image Container */}
      <Box sx={{ position: "relative", width: "100%", height: { xs: 140, md: 180 }, overflow: "hidden" }}>
        <Image
          src={item.image.src || "https://via.placeholder.com/345x180"}
          alt={item.heading}
          fill
          style={{
            objectFit: "cover",
          }}
          quality={75}
          priority
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 280px, 345px"
        />
      </Box>

      <CardContent sx={{ pb: 1, p: { xs: 1.5, md: 2 } }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 600,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "100%",
            mb: 1,
          }}
        >
          {item.heading}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: '"Segoe UI", sans-serif',
            fontWeight: 400,
            fontSize: { xs: "12px", md: "14px" },
            lineHeight: "1.4",
            mb: 2,
            color: "#000000",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: { xs: 1.5, md: 2 }, pt: 0, justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={onButtonClick}
          sx={{
            width: { xs: "100%", md: "224px" },
            height: { xs: "32px", md: "35px" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            gap: "10px",
            borderRadius: "4px",
            border: "1px solid #5D36AF",
            opacity: 1,
            color: "#5D36AF",
            textTransform: "none",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 600,
            transition: "all 0.2s ease",
            "&:hover": {
              border: "1px solid #5D36AF",
              backgroundColor: "rgba(93, 54, 175, 0.08)",
            },
          }}
        >
          {item.buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;