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
import { Title } from 'components/Styled/Shared.styled';

const Categories = () => {
  const dispatch = useDispatch();
  const params = useParams();
  let query = params.category;
  const { category, recipes, loading, totalPages, currentPage, itemsPerPage } =
    useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ query: query || 'Beef', page: 1 }));
  }, [dispatch, query]);

  const handlePageChange = page => {
    dispatch(fetchRecipesByCategory({ query: query, page }));
  };

  return (
    <section>
      <CategoriesConteiner>
        <Title>
          Categories
        </Title>

        <CategoriesTab categoriesList={category} />

        {loading ? <Skeleton /> : <RecipesGallery recipes={recipes} />}
        {totalPages <= 1 || (
          <Paginator
            limit={itemsPerPage}
            totalPages={totalPages}
            page={currentPage}
            pageChange={handlePageChange}
          />
        )}
      </CategoriesConteiner>
    </section>
  );
};

export default Categories;
