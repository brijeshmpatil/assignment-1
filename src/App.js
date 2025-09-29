import React, { useState, useEffect } from 'react';
import { 
  Box,
  CircularProgress
} from '@mui/material';
import {
  Home,
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
import Header from './components/Header';
import BottomNav from './components/BottomNavigation';
import EmptyContainer from './components/EmptyContainer';
import SpendingCategoriesContainer from './components/SpendingCategoriesContainer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate API response with the existing data structure
        const mockApiResponse = [
          {
            "finleyCategory": "HOUSING_AND_UTILITIES",
            "finleyCategoryName": "Housing & Utilities",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "EDUCATION_AND_CHILDCARE",
            "finleyCategoryName": "Education & Childcare",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "TRANSPORTATION",
            "finleyCategoryName": "Transportation",
            "categorySpend": 11.73,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 15.79,
            "spendRemaining": 62.56
          },
          {
            "finleyCategory": "HEALTHCARE_AND_MEDICAL",
            "finleyCategoryName": "Healthcare & Medical",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "INSURANCE",
            "finleyCategoryName": "Insurance",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "LOANS_AND_CREDIT_CARDS",
            "finleyCategoryName": "Loans & Credit Cards",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "GROCERIES",
            "finleyCategoryName": "Groceries",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          },
          {
            "finleyCategory": "ENTERTAINMENT",
            "finleyCategoryName": "Entertainment",
            "categorySpend": 78.5,
            "spendStatus": "OVER_SPENT",
            "spendPercentage": 402.56,
            "spendRemaining": -59.0
          },
          {
            "finleyCategory": "DINING_OUT",
            "finleyCategoryName": "Dining Out",
            "categorySpend": 16.33,
            "spendStatus": "OVER_THRESHOLD_SPENT",
            "spendPercentage": 83.74,
            "spendRemaining": 3.17
          },
          {
            "finleyCategory": "SHOPPING",
            "finleyCategoryName": "Shopping",
            "categorySpend": 1089.4,
            "spendStatus": "OVER_SPENT",
            "spendPercentage": 5586.67,
            "spendRemaining": -1069.9
          },
          {
            "finleyCategory": "MISCELLANEOUS",
            "finleyCategoryName": "Miscellaneous",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 29250.0
          },
          {
            "finleyCategory": "TRAVEL",
            "finleyCategoryName": "Travel",
            "categorySpend": 0.0,
            "spendStatus": "UNDER_SPENT",
            "spendPercentage": 0.0,
            "spendRemaining": 0.0
          }
        ];
        
        setApiData(mockApiResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProgressColor = (percentage) => {
    if (percentage < 50) return '#4caf50';
    if (percentage < 90) return '#ff9800';
    return '#f44336';
  };

  const getCategoryIcon = (finleyCategory) => {
    // Dynamic icon mapping based on category keywords
    const categoryLower = finleyCategory?.toLowerCase() || '';
    
    if (categoryLower.includes('housing') || categoryLower.includes('utilities')) {
      return <Home />;
    }
    if (categoryLower.includes('education') || categoryLower.includes('childcare')) {
      return <School />;
    }
    if (categoryLower.includes('transport') || categoryLower.includes('vehicle')) {
      return <DirectionsCar />;
    }
    if (categoryLower.includes('health') || categoryLower.includes('medical')) {
      return <LocalHospital />;
    }
    if (categoryLower.includes('insurance')) {
      return <Security />;
    }
    if (categoryLower.includes('loan') || categoryLower.includes('credit')) {
      return <CreditCard />;
    }
    if (categoryLower.includes('grocery') || categoryLower.includes('food')) {
      return <ShoppingCart />;
    }
    if (categoryLower.includes('entertainment') || categoryLower.includes('fun')) {
      return <Celebration />;
    }
    if (categoryLower.includes('dining') || categoryLower.includes('restaurant')) {
      return <Restaurant />;
    }
    if (categoryLower.includes('shopping') || categoryLower.includes('retail')) {
      return <ShoppingBag />;
    }
    if (categoryLower.includes('travel') || categoryLower.includes('trip')) {
      return <Flight />;
    }
    if (categoryLower.includes('miscellaneous') || categoryLower.includes('other')) {
      return <Settings />;
    }
    
    // Default fallback
    return <Settings />;
  };

  const formatAmount = (amount) => {
    return `$${Math.abs(amount).toFixed(2)}`;
  };

  const getSpendStatusText = (spendStatus, spendRemaining) => {
    const status = spendStatus?.toLowerCase() || '';
    const remaining = parseFloat(spendRemaining) || 0;
    
    // Check for threshold first (more specific)
    if (status.includes('over') && status.includes('threshold')) return 'over threshold';
    // Then check for over spent (less specific)
    if (status.includes('over') && status.includes('spent')) return 'over limit';
    if (status.includes('under') || remaining > 0) return 'left';
    if (remaining < 0) return 'over limit';
    
    return 'left';
  };

  const categories = apiData.map(item => ({
    name: item.finleyCategoryName || item.categoryName || item.name || 'Unknown Category',
    icon: getCategoryIcon(item.finleyCategory || item.categoryId || item.category),
    amount: formatAmount(item.categorySpend || item.spent || item.amount || 0),
    left: getSpendStatusText(item.spendStatus || item.status || 'UNDER_SPENT', item.spendRemaining || item.remaining || 0),
    percentage: Math.min(item.spendPercentage || item.percentage || 0, 100)
  }));

  if (loading) {
    return (
      <div className="App">
        <Header isScrolled={isScrolled} />
        <Box sx={{ 
          p: 2, 
          pb: 8, 
          pt: 10, 
          maxWidth: 1440, 
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          <CircularProgress size={60} />
        </Box>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="App">
      {/* Top Header */}
      <Header isScrolled={isScrolled} />

      {/* Main Content */}
      <Box sx={{ p: 2, pb: 8, pt: 10, maxWidth: 1440, mx: 'auto' }}>
        {/* Container 1 */}
        <EmptyContainer />

        {/* Container 2 */}
        <SpendingCategoriesContainer 
          categories={categories}
          getProgressColor={getProgressColor}
        />
      </Box>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
