import { useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Title,
  StyledTextarea,
  ValidationInfo,
  Wrapper,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = () => {
  const [currentValue, setCurrentValue] = useLocalStorage(
    'IngredientPreparation',
    null
  );
  const [preparationField, preparationMeta] = useField('preparation');

  const preparationTypingHandler = e => {
    setCurrentValue(e.target.value);
  };

  return (
    <>
      <Title>Recipe Preparation</Title>
      <Wrapper>
        <StyledTextarea
          {...preparationField}
          onChange={preparationTypingHandler}
          rows="4"
          placeholder="Enter recipe"
          value={currentValue}
          required
        ></StyledTextarea>
        {preparationMeta.error && preparationMeta.touched ? (
          <ValidationInfo>{preparationMeta.error}</ValidationInfo>
        ) : null}
      </Wrapper>
    </>
  );
};
