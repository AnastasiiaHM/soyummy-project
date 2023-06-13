import React from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipesGalleryStyled } from './RecipesGalleryStyled';
import {
  ContainerPagination,
  StyledPagination,
} from '../Paginator/Paginator.styled';

const RecipesGallery = ({ recipes, totalPages, page, pageChange }) => {
  return (
    <>
      <RecipesGalleryStyled>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </RecipesGalleryStyled>
      <ContainerPagination>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={(_, newPage) => pageChange(newPage)}
        />
      </ContainerPagination>
    </>
  );
};

export default RecipesGallery;
