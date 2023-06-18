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
import { Section } from 'components/SearchSelector/SearchSelector.styled';

const Search = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const recipes = useSelector(selectSearchedRecipes);
  const dispatch = useDispatch();
  const placeholder = useSelector(state => state.search.example);

  useEffect(() => {
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
      <title className="title">Search</title>

      <SearchBar />
      {placeholder && (
        <ShoppingListEmpty message={'Try looking for something else..'} />
      )}
      <SearchRecipesList recipes={recipes} />
    </Section>
  );
};

export default Search;
