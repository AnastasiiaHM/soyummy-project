import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { colors } from '../colors'

const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }));

const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: '24px',
    lineHeight: '24px',
    textTransform: 'none',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    
    color: colors.darkButton,
    '&.Mui-selected': {
      color: colors.greenButton,
    },
  }));

export function VerticalTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(getInitialValue(location.pathname));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(getInitialValue(location.pathname));
  }, [location.pathname]);

  function getInitialValue(pathname) {
    switch (pathname) {
      case '/categories':
        return 0;
      case '/add':
        return 1;
      case '/recipe/:recipeId':
        return 2;
      case '/favorite':
        return 3;
      case '/shopping-list':
        return 4;
      case '/search':
        return 5;
      default:
        return null;
    }
  }

  return (
    <Box
      sx={{ border: 0, width: '170px', margin: '0 auto', marginTop: '100px'}}
    >
      <StyledTabs
        orientation="vertical"
        value={value !== null ? value : false}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ border: 0}}
      >
             <StyledTab
                    label="Categories"
                    component={Link}
                    to="/categories"
                />
              <StyledTab
                    label="Add recipes"
                    component={Link}
                    to="/add"
                />
                <StyledTab
                    label="My recipes"
                    component={Link}
                    to="/recipe/:recipeId"
                />
                <StyledTab
                    label="Favorites"
                    component={Link}
                    to="/favorite"
                />
                <StyledTab
                    label="Shopping list"
                    component={Link}
                    to="/shopping-list"
                />
                <StyledTab
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <SearchIcon sx={{ marginRight: '0.5rem' }} />
                        Search
                        </Box>
                    }
                    component={Link}
                    to="/search"
                />
      
      </StyledTabs>
      
    </Box>
  );
}