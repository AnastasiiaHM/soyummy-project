import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipesByCategory,
  fetchCategory,
} from 'redux/recipes/operations';
import Skeleton from '../components/RecipesGallery/GallerySkeleton';
import { Loader } from 'components/Loader/Loader';

const Categories = () => {
  const dispatch = useDispatch();
  const { category, recipes, filter, loading } = useSelector(
    state => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchRecipesByCategory(filter));
  }, [dispatch, filter]);

  const onChangeCategory = category => {
    dispatch(fetchRecipesByCategory(filter));
    loading(false);
  };

  return (
    <>
      <h1 className="title">Categories</h1>
      {loading ? (
        <Loader />
      ) : (
        <CategoriesTab
          categoriesList={category}
          onChangeCategory={onChangeCategory}
        />
      )}

      {loading ? <Skeleton /> : <RecipesGallery recipes={recipes} />}
    </>
  );
};

export default Categories;
