import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeDescriptionFields } from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from 'components/RecipePreparationFields/RecipePreparationFields';
import { StyledForm, StyledButton, StyledTitle } from './AddRecipeForm.styled';
import { addNewRecipe } from 'operations/addRecipe';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/auth/slice';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s\n\p{P}\d]*$/,
      'Only alphanumeric characters and spaces are allowed'
    )
    .min(10, 'There must be at least 10 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
  description: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s\n\p{P}\d]*$/,
      'Only alphanumeric characters and spaces are allowed'
    )
    .min(30, 'There must be at least 30 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
  preparation: Yup.string()

    .min(50, 'There must be at least 50 symbols')
    .max(500, 'There must be not over 500 symbols')
    .required('Required'),
});

const initialValue = {
  title: '',
  description: '',
  preparation: '',
};

const errorMessages = {
  400: "We're sorry, but the request you made was invalid. Please check your input and try again.",
  401: "Oops! It seems you're not authorized to access the requested content. Please authenticate yourself and try again.",
  404: 'The requested page or resource cannot be found. Please ensure the URL is correct or explore other sections of our website.',
  500: "We're sorry, but there was an internal server error. Our team is already on it, and we'll have everything back to normal as soon as possible.",
};

export const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [thumb, setThumb] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = message => toast.error(message, { autoClose: 3000 });

  const categoryHandler = value => {
    setCategory(value);
  };

  const timeHandler = value => {
    setTime(value);
  };

  const preparationHandler = value => {
    setPreparation(value);
  };

  const ingredientsListHandler = value => {
    setIngredients(value);
  };

  const recipeImageHandler = value => {
    setThumb(value);
  };

  const submitHandler = async (values, { resetForm }) => {
    try {
      const { title, description } = values;
      const instructions = preparation.join('\r\n');
      const newRecipe = new FormData();
      newRecipe.append('title', title);
      newRecipe.append('description', description);
      newRecipe.append('category', category);
      newRecipe.append('time', parseInt(time));
      newRecipe.append('recipeIMG', thumb);
      newRecipe.append('ingredients', JSON.stringify(ingredients));
      newRecipe.append('instructions', instructions);
      dispatch(setLoading(true));
      const result = await addNewRecipe(newRecipe);

      if (result) {
        dispatch(setLoading(false));
        localStorage.clear();
        resetForm();
        navigate('/own-recipes');
      }
    } catch (error) {
      dispatch(setLoading(false));
      notify(errorMessages[error.status]);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <StyledForm autoComplete="off">
          <StyledTitle className="title">Add recipe</StyledTitle>
          <RecipeDescriptionFields
            recipeImage={recipeImageHandler}
            selectedCategory={categoryHandler}
            selectedMeasure={timeHandler}
          />
          <RecipeIngredients setParentIngredients={ingredientsListHandler} />
          <RecipePreparationFields ingredientPreparation={preparationHandler} />
          <StyledButton type="submit" className="btn blackbtn">
            Add
          </StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
