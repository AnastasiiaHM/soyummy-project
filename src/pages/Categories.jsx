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
import { useParams } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const query = params.category;
  const { category, recipes, loading, totalPages, currentPage, itemsPerPage } =
    useSelector(state => state.categories);
  console.log(itemsPerPage);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ query: query || 'Beef', page: 1 }));
  }, [dispatch, query]);

  const handlePageChange = page => {
    dispatch(fetchRecipesByCategory({ query, page }));
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
