import {
  FormFields,
  RegisterFormStyled,
  Caption,
  InputWraper,
} from '../RegisterForm/RegisterForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import * as yup from 'yup';
import { LogIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const schema = yup.object().shape({
    email: yup.string().email().min(3).max(30).required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
        'The password must contain letters and numbers'
      )
      .required(),
  });

  const handleSubmit = values => {
    console.log(values);
    dispatch(LogIn(values));
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, submitCount }) => {
          const hasEmailError =
            submitCount > 0 && touched.email && errors.email;
          const hasPasswordError =
            submitCount > 0 && touched.password && errors.password;
          const isFormSubmitted = submitCount > 0;

          return (
            <Form autoComplete="off">
              <Caption>Sign In</Caption>
              <FormFields>
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
              <button type="submit">Sign in</button>
            </Form>
          );
        }}
      </Formik>
    </RegisterFormStyled>
  );
};
export default LoginForm;
