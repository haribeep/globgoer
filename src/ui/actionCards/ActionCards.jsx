import React from 'react';
import CustomCard from '@/components/cards/CustomActionCards';
import CovidProtocol from '../../../public/images/CovidProtocol.jpg'
import MakeaDeal from '../../../public/images/Deal.jpg'
import CreateAcount from '../../../public/images/CreateAccount.png'
import { Box } from '@mui/material';

const ActionCards = ()=> {
    const cardData = [
  {
    id: 1,
    image: CovidProtocol,
    heading: "Exclusive Lounge Access",
    description: "Upgrade your journey with premium lounge access starting at just $29.",
    buttonLabel: "Book Now"
  },
  {
    id: 2,
    image: MakeaDeal,
    heading: "Travel Insurance",
    description: "Get comprehensive coverage for your trip and travel with peace of mind.",
    buttonLabel: "Learn More"
  },
  {
    id: 3,
    image: CreateAcount,
    heading: "Special Holiday Deals",
    description: "Grab up to 40% off on international flight and hotel combos this season.",
    buttonLabel: "Explore Deals"
  }
];
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}>
        {cardData.map((item,index)=> {
            return  <CustomCard key={index} item={item}/>
        })}
        </Box>
    )
}

export default ActionCards