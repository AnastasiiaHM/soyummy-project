import { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Title,
  StyledTextarea,
  ValidationInfo,
  Wrapper,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ ingredientPreparation }) => {
  const [currentValue, setCurrentValue] = useLocalStorage(
    'IngredientPreparation',
    null
  );
  const [text, setText] = useState('');
  const [preparationField, preparationMeta] = useField('preparation');
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    ingredientPreparation(text.split('\n'));
  }, [text, ingredientPreparation]);

  const preparationTypingHandler = e => {
    const { value } = e.target;
    setCurrentValue(e.target.value);
    setText(value);
    setFieldValue('preparation', value);
  };

  return (
    <>
      <Title>Recipe Preparation</Title>
      <Wrapper>
        <StyledTextarea
          {...preparationField}
          type="text"
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
