import {
  RecipeDescr,
  PreparationImg,
  RecipePrepContainer,
  PreparationTitle,
  PreparationItem,
  CustomNumbering,
  PreparationText,
  ScrollContainer,
} from './Recipes.styled';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecipeById } from 'redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';

const RecipesPreparation = () => {
  const recipe = useSelector(selectRecipeById);

  if (!recipe) {
    return <Loader />;
  }

  const instructions = recipe.instructions
    ? recipe.instructions.split('\r\n')
    : [];

  return (
    <RecipePrepContainer>
      <RecipeDescr>
        <div>
          <PreparationTitle>Recipe Preparation</PreparationTitle>
          <ScrollContainer>
            <ul>
              {instructions.map((instruction, index) => (
                <PreparationItem key={index}>
                  <CustomNumbering>
                    <PreparationText>{instruction}</PreparationText>
                  </CustomNumbering>
                </PreparationItem>
              ))}
            </ul>
          </ScrollContainer>
        </div>
        <div>
          <PreparationImg
            alt="ingredient_photo"
            width="433px"
            height="332px"
            src={recipe.preview}
          />
        </div>
      </RecipeDescr>
    </RecipePrepContainer>
  );
};

export default RecipesPreparation;
