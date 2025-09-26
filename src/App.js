import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Grid, 
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  CircularProgress
} from '@mui/material';
import {
  Notifications,
  Person,
  Home,
  Chat,
  AttachMoney,
  People,
  Star,
  School,
  DirectionsCar,
  LocalHospital,
  Security,
  CreditCard,
  ShoppingCart,
  Celebration,
  Restaurant,
  ShoppingBag,
  Settings,
  Flight
} from '@mui/icons-material';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProgressColor = (percentage) => {
    if (percentage < 33) return '#4caf50';
    if (percentage < 66) return '#ff9800';
    return '#f44336';
  };

  const categories = [
    { name: 'Housing', icon: <Home />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Education', icon: <School />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Transport', icon: <DirectionsCar />, amount: '$62.56', left: 'left', percentage: 20 },
    { name: 'Healthcare', icon: <LocalHospital />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Insurance', icon: <Security />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Loans', icon: <CreditCard />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Groceries', icon: <ShoppingCart />, amount: '$0.00', left: 'left', percentage: 0 },
    { name: 'Entertain', icon: <Celebration />, amount: '$59.00', left: 'over limit', percentage: 100 },
    { name: 'Dining Out', icon: <Restaurant />, amount: '$45.00', left: 'left', percentage: 60 },
    { name: 'Shopping', icon: <ShoppingBag />, amount: '$120.00', left: 'over limit', percentage: 100 },
    { name: 'Misc', icon: <Settings />, amount: '$30.00', left: 'left', percentage: 30 },
    { name: 'Travel', icon: <Flight />, amount: '$0.00', left: 'left', percentage: 0 }
  ];

  return (
    <div className="App">
      {/* Top Header */}
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

      {/* Main Content */}
      <Box sx={{ p: 2, pb: 8, pt: 10, maxWidth: 1440, mx: 'auto' }}>
        {/* Container 1 */}
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

        {/* Container 2 */}
        <Box 
          sx={{ 
            backgroundColor: 'white', 
            borderRadius: 3, 
            p: 3,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'black' }}>
            Spending by category
          </Typography>
          
          <Grid container spacing={{ xs: 1.5, md: 3 }} justifyContent="center">
            {categories.map((category, index) => (
              <Grid item xs={4} key={index}>
                <Box 
                  className="spending-category-item"
                  sx={{ 
                    textAlign: 'center', 
                    p: 0.5
                  }}
                >
                  <Typography 
                    className="spending-category-text"
                    variant="caption" 
                    display="block" 
                    sx={{ color: '#7B7B7B', fontSize: '0.7rem', fontWeight: 'bold', mb: 1 }}
                  >
                    {category.name}
                  </Typography>
                  <Box className="spending-category-circle" sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                    <CircularProgress
                      variant="determinate"
                      value={100}
                      size={60}
                      thickness={4}
                      sx={{
                        color: '#E6E6E6',
                        position: 'absolute',
                      }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={category.percentage}
                      size={60}
                      thickness={4}
                      sx={{
                        color: getProgressColor(category.percentage),
                        '& .MuiCircularProgress-circle': {
                          strokeLinecap: 'round',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {category.icon}
                    </Box>
                  </Box>
                  <Typography 
                    className="spending-category-amount"
                    variant="caption" 
                    display="block" 
                    sx={{ fontSize: '0.7rem', color: '#7B7B7B', fontWeight: 'bold' }}
                  >
                    {category.amount}
                  </Typography>
                  <Typography 
                    className="spending-category-amount"
                    variant="caption" 
                    display="block" 
                    sx={{ fontSize: '0.7rem', color: '#7B7B7B', fontWeight: 'bold' }}
                  >
                    {category.left}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Bottom Navigation */}
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
    </div>
  );
}

export default App;
