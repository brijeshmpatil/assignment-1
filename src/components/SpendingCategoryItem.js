import React from 'react';
import { 
  Box, 
  Typography, 
  CircularProgress 
} from '@mui/material';

const SpendingCategoryItem = ({ category, getProgressColor }) => {
  return (
    <Box 
      className="spending-category-item"
      sx={{ 
        textAlign: 'center', 
        p: { xs: 0.5, sm: 1, md: 1.5 },
        width: '100%',
        maxWidth: { xs: '60px', sm: '100px', md: '120px' },
        minHeight: { xs: 120, sm: 140, md: 160 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography 
        className="spending-category-text"
        variant="caption" 
        display="block" 
        sx={{ 
          color: '#7B7B7B', 
          fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, 
          fontWeight: 'bold', 
          mb: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
          lineHeight: 1.2
        }}
      >
        {category.name}
      </Typography>
      <Box className="spending-category-circle" sx={{ 
        position: 'relative', 
        display: 'flex', 
        mb: 1,
        width: '60px',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={60}
          thickness={4}
          sx={{
            color: '#E6E6E6',
            position: 'absolute',
            zIndex: 1
          }}
        />
        <CircularProgress
          variant="determinate"
          value={category.percentage}
          size={60}
          thickness={4}
          sx={{
            color: getProgressColor(category.percentage),
            position: 'relative',
            zIndex: 2,
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            zIndex: 3
          }}
        >
          {category.icon}
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography 
          className="spending-category-amount"
          variant="caption" 
          display="block" 
          sx={{ 
            fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, 
            color: '#7B7B7B', 
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.2
          }}
        >
          {category.amount}
        </Typography>
        <Typography 
          className="spending-category-amount"
          variant="caption" 
          display="block" 
          sx={{ 
            fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, 
            color: '#7B7B7B', 
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.2
          }}
        >
          {category.left}
        </Typography>
      </Box>
    </Box>
  );
};

export default SpendingCategoryItem;
