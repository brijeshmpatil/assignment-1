import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SpendingCategoryItem from './SpendingCategoryItem';

const SpendingCategoriesContainer = ({ categories, getProgressColor }) => {
  return (
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
          <Grid 
            item 
            xs={3} 
            sm={2} 
            lg={1.5} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <SpendingCategoryItem 
              category={category} 
              getProgressColor={getProgressColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpendingCategoriesContainer;
