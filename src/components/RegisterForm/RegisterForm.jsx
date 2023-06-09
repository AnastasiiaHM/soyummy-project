import {
  FormFields,
  RegisterFormStyled,
  Caption,
  InputWraper,
} from './RegisterForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BiUser } from 'react-icons/bi';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import Message from 'components/Message/Message';
import { selectAuthError } from 'redux/auth/selectors';
import { emailPattern, passwordPattern } from 'components/patterns';
import { useEffect } from 'react';
import { setAuthError } from 'redux/auth/slice';

export const RegisterForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
  };
  useEffect(() => {
    dispatch(setAuthError(null));
  }, [dispatch]);

  const schema = yup.object().shape({
    name: yup.string().min(1).max(16).required(),
    email: yup
      .string()
      .email()
      .matches(emailPattern, 'email must be valid')
      .min(3)
      .max(30)
      .required(),
    password: yup
      .string()
      .min(6)
      .max(16)
      .matches(passwordPattern, 'the password must contain letters and numbers')
      .required(),
  });

  const message = useSelector(selectAuthError);

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, submitCount }) => {
          const hasNameError = submitCount > 0 && touched.name && errors.name;
          const hasEmailError =
            submitCount > 0 && touched.email && errors.email;
          const hasPasswordError =
            submitCount > 0 && touched.password && errors.password;
          const isFormSubmitted = submitCount > 0;

          return (
            <Form autoComplete="off">
              <Caption>Registration</Caption>
              <FormFields>
                <InputWraper>
                  <BiUser
                    className={`icon ${
                      touched.name &&
                      (hasNameError
                        ? 'error-icon'
                        : isFormSubmitted
                        ? 'success-icon'
                        : '')
                    }`}
                  />
                  {hasNameError && <AiFillCloseCircle className="invalid" />}
                  {!hasNameError && isFormSubmitted && touched.name && (
                    <AiFillCheckCircle className="valid" />
                  )}
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className={`${
                      touched.name &&
                      (hasNameError
                        ? 'error'
                        : isFormSubmitted
                        ? 'success'
                        : '')
                    }`}
                  />
                  {hasNameError && (
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="name"
                    />
                  )}
                </InputWraper>

                <InputWraper>
                  <HiOutlineMail
                    className={`${
                      touched.email &&
                      (hasEmailError
                        ? 'error'
                        : isFormSubmitted
                        ? 'success'
                        : '')
                    }`}
                  />
                  {hasEmailError && <AiFillCloseCircle className="invalid" />}
                  {!hasEmailError && isFormSubmitted && touched.email && (
                    <AiFillCheckCircle className="valid" />
                  )}
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className={`input-field ${
                      touched.email &&
                      (hasEmailError
                        ? 'error'
                        : isFormSubmitted
                        ? 'success'
                        : '')
                    }`}
                  />
                  {hasEmailError && (
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="email"
                    />
                  )}
                </InputWraper>

                <InputWraper>
                  {hasPasswordError && (
                    <AiFillCloseCircle className="invalid" />
                  )}
                  {!hasPasswordError &&
                    isFormSubmitted &&
                    touched.password &&
                    !isSubmitting && <AiFillCheckCircle className="valid" />}
                  <HiOutlineLockClosed
                    className={`${
                      touched.password &&
                      (hasPasswordError
                        ? 'error'
                        : isFormSubmitted
                        ? 'success'
                        : '')
                    }`}
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    className={`input-field ${
                      touched.password &&
                      (hasPasswordError
                        ? 'error'
                        : isFormSubmitted
                        ? 'success'
                        : '')
                    }`}
                  />
                  {touched.password && !hasPasswordError && isFormSubmitted && (
                    <div className="success-message">Password is secure</div>
                  )}
                  {hasPasswordError && (
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="password"
                    />
                  )}
                </InputWraper>
              </FormFields>
              <button type="submit">Sign up</button>
            </Form>
          );
        }}
      </Formik>
      {message && <Message>{message}</Message>}
    </RegisterFormStyled>
  );
};

export default RegisterForm;
