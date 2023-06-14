import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { colors } from '../colors';

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '22px',
  color: colors.blackFont,
  '&.Mui-selected': {
    color: colors.greenButton,
  },
}));

export function BasicTabs() {
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
      case '/own-recipes':
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0 }}>
        <Tabs
          value={value !== null ? value : false}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="none"
        >
          <StyledTab label="Categories" component={Link} to="/categories" />
          <StyledTab label="Add recipes" component={Link} to="/add" />
          <StyledTab label="My recipes" component={Link} to="/own-recipes" />
          <StyledTab label="Favorites" component={Link} to="/favorite" />
          <StyledTab
            label="Shopping list"
            component={Link}
            to="/shopping-list"
          />
          <StyledTab
            label={
              <React.Fragment>
                <SearchIcon sx={{ marginRight: '0.5rem' }} />
              </React.Fragment>
            }
            component={Link}
            to="/search"
          />
        </Tabs>
      </Box>
    </Box>
  );
}
