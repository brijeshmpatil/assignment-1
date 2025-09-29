import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyContainer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 3, 
        p: 4, 
        mb: 3,
        textAlign: 'center',
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <Typography variant="h6" sx={{ color: 'green' }}>
        Keep this empty
      </Typography>
    </Box>
  );
};

export default EmptyContainer;
