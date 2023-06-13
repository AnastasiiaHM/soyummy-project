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
  const [prevText, setPrevText] = useState('');
  const [preparationField, preparationMeta] = useField('preparation');
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (text !== prevText) {
      ingredientPreparation(text.split('\n'));
      setPrevText(text);
    }
  }, [text, prevText, ingredientPreparation]);

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
          name="preparation"
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
