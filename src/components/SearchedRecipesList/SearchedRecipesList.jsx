import React from 'react';
import { RecipesGalleryStyled } from 'components/RecipesGallery/RecipesGalleryStyled';
import { RecipeCard } from 'components/RecipesGallery/RecipeCard/RecipeCard';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectQuery,
} from 'redux/search/selector';
import { Loader } from 'components/Loader/Loader';
import searchNotFound1x from '../images/not-found/searchNotFound1x.png';

export const SearchRecipesList = ({ recipes, location }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && <Loader />}
      {recipes.length > 0 && (
        <RecipesGalleryStyled>
          {recipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} location={location} />
          ))}
        </RecipesGalleryStyled>
      )}
      {recipes.length === 0 && (
        <RecipesGalleryStyled>
          <img src={searchNotFound1x} />
        </RecipesGalleryStyled>
      )}
    </>
  );
};
