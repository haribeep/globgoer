import React, { useState } from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Image from 'next/image';

const CustomTabSelector = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('recommended');

  const tabOptions = [
    { 
      id: 'recommended', 
      label: 'Recommended', 
      info: 'Best value',
      icon: <ThumbUpIcon sx={{ fontSize: 18 }} /> 
    },
    { 
      id: 'cheapest', 
      label: 'Cheapest', 
      info: 'Lowest price',
      icon: <Image src="/images/cheapest.png" alt="cheapest" width={18} height={18} /> 
    },
    { 
      id: 'fastest', 
      label: 'Fastest', 
      info: 'Quickest route',
      icon: <ElectricBoltIcon sx={{ fontSize: 18 }} /> 
    },
  ];

  const handleSelect = (id) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        mb: 2.5,
      }}
    >
      {tabOptions.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <ButtonBase
            onClick={() => handleSelect(tab.id)}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '16px 12px',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                backgroundColor: activeTab === tab.id ? '#482A89' : 'transparent',
              },
            }}
          >
            <Box sx={{ 
              color: activeTab === tab.id ? '#482A89' : '#000000',
              display: 'flex',
              alignItems: 'center'
            }}>
              {tab.icon}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography
                sx={{
                  fontFamily: "'Segoe UI', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: activeTab === tab.id ? '#482A89' : '#000000',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  m: 0,
                  p: 0
                }}
              >
                {tab.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Segoe UI', sans-serif",
                  fontSize: '12px',
                  color: activeTab === tab.id ? '#482A89' : '#666',
                  mt: '4px',
                  lineHeight: '100%',
                }}
              >
                {tab.info}
              </Typography>
            </Box>
          </ButtonBase>
          {index < tabOptions.length - 1 && (
            <Box sx={{ width: '1px', backgroundColor: '#e0e0e0', my: 1.5 }} />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CustomTabSelector;