import { Title, StyledTextarea } from './RecipePreparationFields.styled';

export const RecipePreparationFields = () => {
  return (
    <>
      <Title>Recipe Preparation</Title>
      <StyledTextarea
        rows="4"
        placeholder="Enter recipe"
        required
      ></StyledTextarea>
    </>
  );
};
