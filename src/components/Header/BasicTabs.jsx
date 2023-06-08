import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { colors } from '../colors'

const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '22px',
    color: colors.blackFont,
    '&.Mui-selected': {
      color: colors.greenButton,
    },
  }));

export function BasicTabs() {
    const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0 }}>
            <Tabs
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example" 
                indicatorColor='none'
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
                        <React.Fragment>
                          <SearchIcon sx={{ marginRight: '0.5rem' }} />
                        </React.Fragment>
                    }
                    component={Link}
                    to="/search"
                    isactive={(location.pathname === '/search').toString()}
                />
            </Tabs>
      </Box>
    </Box>
  );
}