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
import { Title } from 'components/Styled/Shared.styled';
import { changeExample, changeItems, changeQuery } from 'redux/search/slice';


const Search = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const recipes = useSelector(selectSearchedRecipes);
  const dispatch = useDispatch();
  const placeholder = useSelector(state => state.search.example);

  useEffect(() => {
    console.log('fetch');
    if (query === '') {
      console.log('fetch');
      dispatch(changeItems(null));
      dispatch(changeQuery(''));
      return;
    }
    console.log('fetch');
    dispatch(changeExample(false));
    dispatch(changeItems(null));
  }, [dispatch, query]);

  useEffect(() => {
    if (query === '') {
      dispatch(changeItems(null));
      dispatch(changeQuery(''));
      return;
    }
    switch (queryType) {
      case 'title':
        console.log('fetch');

        dispatch(getRecipesByQuery(query));

        break;
      case 'ingredients':
        console.log('fetch');
        dispatch(getRecipesByIngredient(query));
        break;
      default:
        return;
    }
  }, [dispatch, query, queryType]);

  return (
    <Section>
      <Title>Search</Title>
      <SearchBar />
      {placeholder && (
        <ShoppingListEmpty message={'Try looking for something else..'} />
      )}
      <SearchRecipesList recipes={recipes} />
    </Section>
  );
};

export default Search;
