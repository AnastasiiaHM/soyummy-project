import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { Container, Form } from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
  return (
    <>
      <Container>
        <h2 className="title">Add recipe</h2>
        <Form>
          <RecipeDescriptionFields />
          <RecipeIngredients />
        </Form>
      </Container>
    </>
  );
};
