import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipesByCategory,
  fetchCategory,
} from 'redux/recipes/operations';
import Skeleton from '../components/RecipesGallery/GallerySkeleton';
import { CategoriesConteiner } from '../components/CategoriesTab/CategoriesConteiner.styled';
import Paginator from 'components/Paginator/Paginator';

const Categories = () => {
  const dispatch = useDispatch();
  const {
    category,
    recipes,
    filter,
    loading,
    totalPages,
    currentPage,
    itemsPerPage,
  } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ category: filter, page: 1 }));
  }, [dispatch, filter]);

  const handlePageChange = page => {
    dispatch(fetchRecipesByCategory({ category: filter, page }));
  };

  return (
    <CategoriesConteiner>
      <h1 className="title">Categories</h1>

      <CategoriesTab categoriesList={category} />

      {loading ? <Skeleton /> : <RecipesGallery recipes={recipes} />}
      <Paginator
        limit={itemsPerPage}
        totalPages={totalPages}
        page={currentPage}
        pageChange={handlePageChange}
      />
    </CategoriesConteiner>
  );
};

export default Categories;
