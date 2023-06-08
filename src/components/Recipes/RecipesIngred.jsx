import React from 'react';
import {IngredientList} from './IngredientList'
import {RecipeIngContainer, RecipeIngTable, IngTable, IngText, RecipeIngText} from './Recipes.styled'
const RecipesIngredients = () => {
    return(
        <>
        <RecipeIngContainer>
          <RecipeIngTable>
                <RecipeIngText>Ingredients</RecipeIngText>
                <IngTable>
                <IngText>Number</IngText>
                <p>Add to list</p>
                </IngTable>
          </RecipeIngTable>
          <IngredientList />
        </RecipeIngContainer>
      </>
    )  
    
}

export default RecipesIngredients;