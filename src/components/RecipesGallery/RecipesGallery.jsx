import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';

const RecipesGallery = ({ recipes }) => {
  return (
    <>
      <RecipesGalleryStyled>
        {recipes?.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </RecipesGalleryStyled>
    </>
  );
};

export default RecipesGallery;
