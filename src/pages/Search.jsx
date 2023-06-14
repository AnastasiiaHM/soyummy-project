import { useSelector } from 'react-redux';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Search = () => {
  const recipes = useSelector(state => state.categories.recipes);

  return (
    <section>
      <title className="title">Search</title>

      <SearchBar />
      <RecipesGallery recipes={recipes} />
    </section>
  );
};

export default Search;
