import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, css } from '@mui/system';
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
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box
      sx={{ border: 0, width: '170px', margin: '0 auto', marginTop: '100px'}}
    >
      <StyledTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ border: 0}}
      >
             <StyledTab
                    label="Categories"
                    component={Link}
                    to="/categories"
                    isactive={(location.pathname === '/categories').toString()}
                />
              <StyledTab
                    label="Add recipes"
                    component={Link}
                    to="/add"
                    isactive={(location.pathname === '/add').toString()}
                />
                <StyledTab
                    label="My recipes"
                    component={Link}
                    to="/recipe/:recipeId"
                    isactive={(location.pathname === '/recipe/:recipeId').toString()}
                />
                <StyledTab
                    label="Favorites"
                    component={Link}
                    to="/favorite"
                    isactive={(location.pathname === '/favorite').toString()}
                />
                <StyledTab
                    label="Shopping list"
                    component={Link}
                    to="/shopping-list"
                    isactive={(location.pathname === '/shopping-list').toString()}
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
                    isactive={(location.pathname === '/search').toString()}
                />
      
      </StyledTabs>
      
    </Box>
  );
}