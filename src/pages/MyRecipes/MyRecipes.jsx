import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message, RecipesContainer } from '../Favorite/Favorite.styled';
import RecipesList from 'components/Favorite/FavoriteList';
import { deleteOwnRecipe, fetchOwnRecipes } from 'redux/my-recipes/operations';
import { ShoppingListEmpty } from 'components/ShopingList/ShoppingListEmpty/ShoppingListEmpty';

const MyRecipes = () => {
  const dispatch = useDispatch();
  let { recipes, totalPages, currentPage, loading, error, itemsPerPage } =
    useSelector(state => state.ownRecipes);
  const [deletePageChange, setDeletePageChange] = useState(false);

  useEffect(() => {
    dispatch(fetchOwnRecipes(1));
  }, [dispatch]);

  useEffect(() => {
    if (deletePageChange) {
      dispatch(fetchOwnRecipes(currentPage));
    }

    setDeletePageChange(false);
  }, [currentPage, deletePageChange, dispatch]);

  if (error) {
    return (
      <Message>Error while retrieving your recipes: {error.message}</Message>
    );
  }

  if (!loading && recipes?.length === 0) {
    return (
      <ShoppingListEmpty message={'You dont have favourite recipes yet '} />
    );
  }

  const handlePageChange = page => {
    dispatch(fetchOwnRecipes(page));
  };

  const handleCardDelete = async recipeId => {
    await dispatch(deleteOwnRecipe(recipeId));
    setDeletePageChange(true);
  };

  return (
    <RecipesContainer>
      <RecipesList
        list={recipes}
        listName="My recipes"
        totalPages={totalPages}
        page={currentPage}
        loading={loading}
        itemsPerPage={itemsPerPage}
        pageChange={handlePageChange}
        deleteCard={handleCardDelete}
      />
    </RecipesContainer>
  );
};

export default MyRecipes;
