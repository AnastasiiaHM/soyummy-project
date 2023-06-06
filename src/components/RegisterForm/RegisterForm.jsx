import { FormFields, RegisterFormStyled } from './RegisterForm.styled';
import { Caption, ButtonContainer } from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/user/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { useState } from 'react';
import { selectAuthError } from 'redux/user/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(254, 'Username must be less than or equal to 254 characters')
      .required('Username is a required field'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3, 'Email must be at least 3 characters')
      .max(254, 'Email must be less than or equal to 254 characters')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be less than or equal to 100 characters')
      .required('Password is a required field'),
  });

  const message = useSelector(selectAuthError);

  const navigate = useNavigate();
  const redirection = () => {
    const path = '/register';
    navigate(path);
  };

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Register</Caption>
          <FormFields>
            <InputWraper>
              <Field
                type="text"
                name="username"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="username">Name *</label>
              <ErrorMessage className="error" component="div" name="username" />
            </InputWraper>

            <InputWraper>
              <Field
                type="text"
                name="email"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <Field
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="password">Password *</label>
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button
              className="white regLogbutton"
              type="button"
              onClick={redirection}
            >
              Log In
            </Button>
            <Button className="orange regLogbutton" type="submit">
              Register
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
    </RegisterFormStyled>
  );
};
