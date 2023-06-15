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

const Search = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const recipes = useSelector(selectSearchedRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
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
    <section>
      <title className="title">Search</title>

      <SearchBar />

      <SearchRecipesList recipes={recipes} />
    </section>
  );
};

export default Search;
