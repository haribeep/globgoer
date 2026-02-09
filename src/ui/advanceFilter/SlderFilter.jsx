import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import TimeSlider from "@/components/CustomSlider";

const FilterSidebar = () => {
  const [depTime, setDepTime] = useState([0, 24]);
  const [arrTime, setArrTime] = useState([0, 24]);

  return (
    <Box sx={{ width: "260px", p: 2, bgcolor: "#fff" }}>
      <TimeSlider
        title="Departure Time"
        value={depTime}
        onChange={setDepTime}
      />

      <Divider sx={{ my: 3 }} />

      <TimeSlider title="Arrival Time" value={arrTime} onChange={setArrTime} />
    </Box>
  );
};

export default FilterSidebar;
