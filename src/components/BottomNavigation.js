import React from 'react';
import { 
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import {
  Home,
  Chat,
  AttachMoney,
  People
} from '@mui/icons-material';

const BottomNav = () => {
  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000 
      }} 
      elevation={3}
    >
      <BottomNavigation 
        value={2} 
        showLabels
        sx={{ backgroundColor: 'white', pb: 2 }}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<Home />} 
          sx={{ color: 'gray' }}
        />
        <BottomNavigationAction 
          label="Finley AI" 
          icon={<Chat />} 
          sx={{ color: 'gray' }}
        />
        <BottomNavigationAction 
          label="Spending" 
          icon={<AttachMoney />} 
          className="active-state"
        />
        <BottomNavigationAction 
          label="Meet Coach" 
          icon={<People />} 
          sx={{ color: 'gray' }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
