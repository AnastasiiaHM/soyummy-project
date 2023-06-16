import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import { StyledTab, StyledBox } from './CategoriesTab.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/recipes/slice';
import { useNavigate } from 'react-router-dom';

export default function CategoriesTab(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  const { categoriesList } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onClickCategory = e => {
    dispatch(setFilter(e));
    navigate(`/categories/${e}`);
  };
  // useEffect(() => {
  //   setValue(getInitialValue(location.pathname));
  // }, [location.pathname]);

  // function getInitialValue(pathname) {
  //   switch (pathname) {
  //     case '/Beef':
  //       return 0;
  //     case '/Breakfast':
  //       return 1;
  //     case '/Dessert':
  //       return 2;
  //     case '/Goat':
  //       return 3;
  //     case '/Lamb':
  //       return 4;
  //     case '/Miscellaneous':
  //       return 5;
  //     default:
  //       return null;
  //   }
  // }

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
            // component={Link}
            // to={`/categories/${category.name}`}
            key={category._id}
            label={category.name}
            onClick={e => onClickCategory(category.name)}
          />
        ))}
      </Tabs>
    </StyledBox>
  );
}
