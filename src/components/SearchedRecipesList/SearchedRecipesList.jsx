import React, { useEffect } from 'react';
import { RecipesGalleryStyled } from 'components/RecipesGallery/RecipesGalleryStyled';
import { RecipeCard } from 'components/RecipesGallery/RecipeCard/RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/search/selector';
import { Loader } from 'components/Loader/Loader';
import { changeItems, resetState } from 'redux/search/slice';

export const SearchRecipesList = ({ recipes, location }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(changeItems([]));
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <RecipesGalleryStyled>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} location={location} />
        ))}
      </RecipesGalleryStyled>
    </>
  );
};
