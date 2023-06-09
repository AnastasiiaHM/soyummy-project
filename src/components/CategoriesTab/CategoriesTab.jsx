import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { colors } from '../colors';
import { StyledTab } from './CategoriesTab.styled';

export default function CategoriesTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.inherit',
        pt: '50px',
        borderBottom: `1px solid ${colors.categoriesLIne}`,
        '& .MuiTabs-indicator': {
          backgroundColor: colors.greenButton,
        },
        '& .MuiButtonBase-root': {
          p: '10px 0 30px',
          mr: '28px',
        },
        '& .MuiTabScrollButton-root': {
          m: 0,
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrolltabs"
      >
        <StyledTab label="Beef" />
        <StyledTab label="Breakfast" />
        <StyledTab label="Chicken" />
        <StyledTab label="Dessert" />
        <StyledTab label="Goat" />
        <StyledTab label="Lamb" />
        <StyledTab label="Pasta" />
        <StyledTab label="Pork" />
        <StyledTab label="Seafood" />
        <StyledTab label="Side" />
        <StyledTab label="Soup" />
        <StyledTab label="Starter" />
        <StyledTab label="Vegan" />
        <StyledTab label="Vegetarian" />
      </Tabs>
    </Box>
  );
}
