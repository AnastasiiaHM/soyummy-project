import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { colors } from '../colors';
import { StyledTab } from './CategoriesTab.styled';
// import { useSelector } from 'react-redux';
// import { setCategoryName } from '../../redux/recipes/slice';
// import { selectCategoryName } from '../../redux/recipes/selectors';

export default function CategoriesTab() {
  const categories = [
    {
      _id: '6462a6cd4c3d0ddd28897f8e',
      name: 'Beef',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f95',
      name: 'Breakfast',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f8d',
      name: 'Chicken',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f8f',
      name: 'Dessert',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f97',
      name: 'Goat',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f8b',
      name: 'Lamb',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f93',
      name: 'Miscellaneous',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f94',
      name: 'Pasta',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f91',
      name: 'Pork',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f8a',
      name: 'Seafood',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f96',
      name: 'Side',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f98',
      name: 'Soup',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f8c',
      name: 'Starter',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f90',
      name: 'Vegan',
    },
    {
      _id: '6462a6cd4c3d0ddd28897f92',
      name: 'Vegetarian',
    },
  ];

  // const getCategoryName = useSelector(state => state.categoriesReducer.name);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  // const categoryValue = categories.map(category => (category = category.name));

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
        {categories.map((category, i) => (
          <StyledTab key={i} label={category.name} />
        ))}
      </Tabs>
    </Box>
  );
}
