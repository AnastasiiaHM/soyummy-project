import React from 'react';
import { RecipeCardStyled } from './RecipeCardStyled';
export const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardStyled>
      <img src="" alt="" />
      <p className="recipeName">`{recipe.name}`</p>
    </RecipeCardStyled>
  );
};
