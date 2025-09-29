import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box
} from '@mui/material';
import {
  Notifications,
  Person,
  Star
} from '@mui/icons-material';

const Header = ({ isScrolled }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: isScrolled ? 'white' : 'transparent', 
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Star sx={{ color: 'green', mr: 1 }} />
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
            Hi, Super
          </Typography>
        </Box>
        <Box>
          <IconButton sx={{ backgroundColor: 'white', p: 0.5, mr: 1 }}>
            <Notifications sx={{ color: 'black' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: 'white', p: 0.5 }}>
            <Person sx={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
