import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchAllRecipes } from 'redux/recipes/operations';

const Search = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.categories.recipes);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  });

  return (
    <section>
      <title className="title">Search</title>

      <SearchBar />
      <RecipesGallery recipes={recipes} />
    </section>
  );
};

export default Search;
