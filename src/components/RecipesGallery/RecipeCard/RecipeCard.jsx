import React from 'react';
import { RecipeCardStyled, StyledLink } from './RecipeCardStyled';

export const RecipeCard = ({ recipe, location }) => {
  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <RecipeCardStyled onClick={uppPageHandler}>
      <StyledLink to={`/recipe/${recipe._id}`} state={{ from: location }}>
        <img className="image" src={recipe.preview} alt="dish-card" />
        <p className="name">{recipe.title}</p>
      </StyledLink>
    </RecipeCardStyled>
  );
};
