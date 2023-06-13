import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipesByCategory,
  fetchCategory,
  fetchAllRecipes,
} from 'redux/recipes/operations';

const Categories = () => {
  const dispatch = useDispatch();
  const { category, recipes, filter } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchAllRecipes());
    dispatch(fetchRecipesByCategory(filter));
  }, [dispatch, filter]);

  const onChangeCategory = category => {
    dispatch(fetchRecipesByCategory(filter));
  };

  return (
    <>
      <h1 className="title">Categories</h1>
      <CategoriesTab
        categoriesList={category}
        onChangeCategory={onChangeCategory}
      />
      <RecipesGallery recipes={recipes} />
    </>
  );
};

export default Categories;
