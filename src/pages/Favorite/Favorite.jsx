import FavoriteList from 'components/Favorite/FavoriteList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, getState } from 'react-redux';
import {
  deleteFavoriteRecipe,
  fetchFavoriteRecipes,
} from 'redux/favorite/operations';
import { FavoriteContainer, Message } from './Favorite.styled';

const Favorite = () => {
  const dispatch = useDispatch();
  let { recipes, totalPages, currentPage, loading, error, itemsPerPage } =
    useSelector(state => state.favoriteRecipes);
    const [deletePageChange, setDeletePageChange] = useState(false);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes(1));
  }, [dispatch]);

  useEffect(() => {
    if (deletePageChange) { 
      dispatch(fetchFavoriteRecipes(currentPage))
    }

    setDeletePageChange(false);
  }, [currentPage, deletePageChange, dispatch]);

  if (error) {
    return (
      <Message>
        Error while retrieving favorite recipes: {error.message}
      </Message>
    );
  }

  if (!loading && recipes?.length === 0) {
    return <Message>You don't have favorite recipes yet.</Message>;
  }

  const handlePageChange = page => {
    dispatch(fetchFavoriteRecipes(page));
  };

  const handleCardDelete = async recipeId => {
    await dispatch(deleteFavoriteRecipe(recipeId));
    setDeletePageChange(true);
  };

  return (
    <FavoriteContainer>
      <FavoriteList
        list={recipes}
        listName="Favorites"
        totalPages={totalPages}
        page={currentPage}
        loading={loading}
        itemsPerPage={itemsPerPage}
        pageChange={handlePageChange}
        deleteCard={handleCardDelete}
      />
    </FavoriteContainer>
  );
};

export default Favorite;
