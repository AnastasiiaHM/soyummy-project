import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '24px',
  textTransform: 'none',
  fontStyle: 'normal',
  fontWeight: 500,

  color: theme.logoNameText,
  '&.Mui-selected': {
    color: theme.constantGreenColor,
  },
  '&:hover': {
    color: theme.constantGreenColor,
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
    if (pathname === '/categories' || pathname.startsWith('/categories/')) {
      return 0;
    }
    if (pathname === '/own-recipes' || pathname.startsWith('/recipe/')) {
      return 2;
    }
    switch (pathname) {
      case '/add':
        return 1;
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

  useEffect(() => {
    if (location.pathname === '/categories' || location.pathname.startsWith('/categories/')) {
      setValue(0);
    }
    if (location.pathname === '/own-recipes' || location.pathname.startsWith('/recipe/')) {
      setValue(2);
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{ border: 0, width: '180px', margin: '0 auto', marginTop: '100px' }}
    >
      <StyledTabs
        orientation="vertical"
        value={value !== null ? value : false}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ border: 0 }}
      >
        <StyledTab label="Categories" component={Link} to="/categories" />
        <StyledTab label="Add recipes" component={Link} to="/add" />
        <StyledTab label="My recipes" component={Link} to="/own-recipes" />
        <StyledTab label="Favorites" component={Link} to="/favorite" />
        <StyledTab label="Shopping list" component={Link} to="/shopping-list" />
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
