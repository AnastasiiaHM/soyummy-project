import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';
import { List, ListName } from '../Favorite/List.styled';

const RecipesGallery = ({ recipes, totalPages, page, pageChange }) => {
  return (
    <>
      <RecipesGalleryStyled>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </RecipesGalleryStyled>
      <List>
        <ListName
          count={totalPages}
          page={page}
          onChange={(_, newPage) => pageChange(newPage)}
        />
      </List>
    </>
  );
};

export default RecipesGallery;
