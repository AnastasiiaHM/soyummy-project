import React from 'react';
import { RecipeCardStyled } from './RecipeCardStyled';
import { Link } from 'react-router-dom';

export const RecipeCard = ({ recipe, path, location }) => {
  return (
    <RecipeCardStyled>
      {/* <Link to={path} state={{ from: location }}> */}
      <img className="image" src={recipe.preview} alt="dish-card" />
      <p className="name">{recipe.title}</p>
      {/* </Link> */}
    </RecipeCardStyled>
  );
};
