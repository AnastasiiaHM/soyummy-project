import { useState } from 'react';
import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { Form, StyledButton, StyledTitle } from './AddRecipeForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Only alphanumeric characters and spaces are allowed'
    )
    .min(10, 'There must be at least 10 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
  description: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Only alphanumeric characters and spaces are allowed'
    )
    .min(30, 'There must be at least 30 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
  preparation: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Only alphanumeric characters and spaces are allowed'
    )
    .min(50, 'There must be at least 50 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
});

const initialValue = {
  title: '',
  description: '',
  preparation: '',
};

export const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
  };

  const handler = value => {
    console.log('Hello', value);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form onSubmit={submitHandler}>
        <StyledTitle className="title">Add recipe</StyledTitle>
        <RecipeDescriptionFields selectedValue={handler} />
        <RecipeIngredients setParentIngredients={setIngredients} />
        <RecipePreparationFields />
        <StyledButton type="submit" className="btn blackbtn">
          Add
        </StyledButton>
      </Form>
    </Formik>
  );
};
