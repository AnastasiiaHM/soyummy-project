import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { colors } from '../colors';
import { StyledTab } from './CategoriesTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/recipes/slice';

export default function CategoriesTab(props) {
  const categoryFilter = useSelector(state => state.categories.filter);
  const dispatch = useDispatch();
  const { categoriesList } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onClickCategory = id => {
    dispatch(setFilter(categoryFilter));
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
        {categoriesList.map(category => (
          <StyledTab
            key={category._id}
            label={category.name}
            onClick={onClickCategory}
          />
        ))}
      </Tabs>
    </Box>
  );
}
