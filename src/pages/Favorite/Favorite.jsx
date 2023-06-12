import FavoriteList from 'components/Favorite/FavoriteList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFavoriteRecipe,
  fetchFavoriteRecipes,
} from 'redux/favorite/operations';
import { FavoriteContainer, LoaderContainer, Message } from './Favorite.styled';

const itemsPerPage = 4;

const Favorite = () => {
  const dispatch = useDispatch();
  let { recipes, totalPages, currentPage, loading, error } = useSelector(
    state => state.favoriteRecipes
  );

  useEffect(() => {
    dispatch(
      fetchFavoriteRecipes({
        page: 1,
        limit: itemsPerPage,
      })
    );
  }, [dispatch]);

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
    return <Message>You don't have favorite recipes yet.</Message>;
  }

  const handlePageChange = page => {
    dispatch(
      fetchFavoriteRecipes({
        page,
        limit: itemsPerPage,
      })
    );
  };

  const handleCardDelete = recipeId => {
    dispatch(deleteFavoriteRecipe(recipeId), () => {
      handlePageChange(currentPage);
    });
  };

  return (
    <FavoriteContainer>
      <FavoriteList
        list={recipes}
        listName="Favorites"
        totalPages={totalPages}
        page={currentPage}
        pageChange={handlePageChange}
        deleteCard={handleCardDelete}
      />
    </FavoriteContainer>
  );
};

export default Favorite;
