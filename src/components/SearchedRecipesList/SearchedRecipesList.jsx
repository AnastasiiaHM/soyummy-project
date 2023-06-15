import React, { useEffect } from 'react';
import { RecipesGalleryStyled } from 'components/RecipesGallery/RecipesGalleryStyled';
import { RecipeCard } from 'components/RecipesGallery/RecipeCard/RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectQuery,
} from 'redux/search/selector';
import { Loader } from 'components/Loader/Loader';
import searchNotFound1x from '../images/not-found/searchNotFound1x.png';
import { resetState } from 'redux/search/slice';
import { ShoppingListEmpty } from 'components/ShopingList/ShoppingListEmpty/ShoppingListEmpty';

export const SearchRecipesList = ({ recipes, location }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {query ? (
        <RecipesGalleryStyled>
          {recipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} location={location} />
          ))}
        </RecipesGalleryStyled>
      ) : (
        <RecipesGalleryStyled>
          <ShoppingListEmpty message={'Try looking for something else..'} />
        </RecipesGalleryStyled>
      )}
    </>
  );
};
