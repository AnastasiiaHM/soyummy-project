import React from 'react';
import { RecipeCardStyled } from './RecipeCardStyled';

export const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardStyled>
      <a href="*">
        <img
          className="image"
          src="https://loremflickr.com/300/323/food"
          alt="dish-card"
        />
        <p className="name">{recipe.name}</p>
      </a>
    </RecipeCardStyled>
  );
};
