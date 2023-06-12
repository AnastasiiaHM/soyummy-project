import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipesByCategory,
  fetchCategory,
} from 'redux/recipes/operations';
import { LoaderContainer, Message } from '../pages/Favorite/Favorite.styled';

const Categories = () => {
  const dispatch = useDispatch();
  const { category, recipes, loading, error, totalPages, currentPage } =
    useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const itemsPerPage = 8;

  const onChangeCategory = category => {
    dispatch(
      fetchRecipesByCategory({ category, page: 1, limit: itemsPerPage })
    );
  };

  if (loading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (error) {
    console.log('error', error);

    return (
      <Message>
        Error while retrieving favorite recipes: {error.message}
      </Message>
    );
  }

  if (recipes?.length === 0) {
    return <Message>Whoops, there is no recipes in this category.</Message>;
  }

  const handlePageChange = page => {
    dispatch(
      fetchRecipesByCategory({
        page,
        limit: itemsPerPage,
      })
    );
  };

  return (
    <>
      <h1 className="title">Categories</h1>
      <CategoriesTab
        categoriesList={category}
        onChangeCategory={onChangeCategory}
      />
      <RecipesGallery
        recipes={recipes}
        pageChange={handlePageChange}
        totalPages={totalPages}
        page={currentPage}
      />
    </>
  );
};

export default Categories;
