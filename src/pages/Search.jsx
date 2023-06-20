import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/search/operation';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuery,
  selectQueryType,
  selectSearchedRecipes,
} from 'redux/search/selector';
import { SearchRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { ShoppingListEmpty } from 'components/ShopingList/ShoppingListEmpty/ShoppingListEmpty';
import { StyledTitle } from 'components/SearchForm/SearchForm.styled';
import { changeExample } from 'redux/search/slice';
import { Section } from 'components/ShopingList/ShopingList.styled';

const Search = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const recipes = useSelector(selectSearchedRecipes);
  const dispatch = useDispatch();
  const placeholder = useSelector(state => state.search.example);

  useEffect(() => {
    dispatch(changeExample(false));
  }, [dispatch]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(query));
        break;
      case 'ingredients':
        dispatch(getRecipesByIngredient(query));
        break;
      default:
        return;
    }
  }, [dispatch, query, queryType]);

  return (
    <Section>
      <StyledTitle className="title">Search</StyledTitle>

      <SearchBar />
      {placeholder && (
        <ShoppingListEmpty message={'Try looking for something else..'} />
      )}
      <SearchRecipesList recipes={recipes} />
    </Section>
  );
};

export default Search;
