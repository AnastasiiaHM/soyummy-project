import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { Container, Form, StyledButton } from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
  return (
    <>
      <Container>
        <h2 className="title">Add recipe</h2>
        <Form>
          <RecipeDescriptionFields />
          <RecipeIngredients />
          <RecipePreparationFields />
          <StyledButton type="submit" className="btn blackbtn">
            Add
          </StyledButton>
        </Form>
      </Container>
    </>
  );
};
