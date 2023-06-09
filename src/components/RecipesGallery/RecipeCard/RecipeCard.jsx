import React from 'react';
import { RecipeCardStyled } from './RecipeCardStyled';

export const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardStyled>
      <a href="*">
        <img className="image" src={recipe.preview} alt="dish-card" />
        <p className="name">{recipe.title}</p>
      </a>
    </RecipeCardStyled>
  );
};
