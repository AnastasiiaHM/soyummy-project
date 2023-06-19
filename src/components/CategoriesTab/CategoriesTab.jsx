import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { StyledTab, StyledBox } from './CategoriesTab.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/recipes/slice';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoriesTab(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { category } = useParams();
  const { categoriesList } = props;
  const index = categoriesList.findIndex(recipe => recipe.name === category);
  const [value, setValue] = useState(index >= 0 ? index : false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickCategory = e => {
    dispatch(setFilter(e));
    navigate(`/categories/${e}`);
  };

  return (
    <StyledBox>
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
            onClick={() => onClickCategory(category.name)}
          />
        ))}
      </Tabs>
    </StyledBox>
  );
}
