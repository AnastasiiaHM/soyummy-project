import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { colors } from '../colors';
import { StyledTab } from './CategoriesTab.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/recipes/slice';
import { useNavigate } from 'react-router-dom';

export default function CategoriesTab(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoriesList } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onClickCategory = e => {
    dispatch(setFilter(e));
    navigate(`/categories/${e}`);
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
            onClick={e => onClickCategory(category.name)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
