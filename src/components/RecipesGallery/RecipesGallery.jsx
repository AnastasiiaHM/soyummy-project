import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';
import Paginator from 'components/Paginator/Paginator';

const RecipesGallery = ({ recipes, totalPages, page, pageChange }) => {
  return (
    <>
      <RecipesGalleryStyled>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </RecipesGalleryStyled>
      <Paginator totalPages={totalPages} page={page} pageChange={pageChange} />
    </>
  );
};

export default RecipesGallery;
