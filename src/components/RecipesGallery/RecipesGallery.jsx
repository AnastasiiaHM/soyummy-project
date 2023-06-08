import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';

export const RecipesGallery = ({ recipes }) => {
  return (
    <RecipesGalleryStyled>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.index} recipe={recipe} />
      ))}
    </RecipesGalleryStyled>
  );
};
