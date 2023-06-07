import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';

export const RecipesGallery = ({ recipes }) => {
  return (
    <RecipesGalleryStyled>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </RecipesGalleryStyled>
  );
};
