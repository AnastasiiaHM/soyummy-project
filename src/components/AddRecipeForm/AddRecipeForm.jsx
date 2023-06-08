import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { Form, StyledButton, StyledTitle } from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
  return (
    <>
      <Form>
        <StyledTitle className="title">Add recipe</StyledTitle>
        <RecipeDescriptionFields />
        <RecipeIngredients />
        <RecipePreparationFields />
        <StyledButton type="submit" className="btn blackbtn">
          Add
        </StyledButton>
      </Form>
    </>
  );
};
