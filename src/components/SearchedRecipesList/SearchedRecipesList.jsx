import React from 'react';
import { RecipesGalleryStyled } from 'components/RecipesGallery/RecipesGalleryStyled';
import { RecipeCard } from 'components/RecipesGallery/RecipeCard/RecipeCard';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/search/selector';
import { Loader } from 'components/Loader/Loader';

export const SearchRecipesList = ({ recipes, location }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
