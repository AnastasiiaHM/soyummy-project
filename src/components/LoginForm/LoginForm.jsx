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

export const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const schema = yup.object().shape({
    email: yup.string().email().min(3).max(254).required(),
    password: yup.string().min(8).max(100).required(),
  });

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        // onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form autoComplete="off">
            <Caption>Sign In</Caption>
            <FormFields>
              <InputWraper>
                <HiOutlineMail
                  className={`${
                    touched.email && (errors.email ? 'error' : 'success')
                  }`}
                />
                {errors.email && touched.email && (
                  <AiFillCloseCircle className="invalid" />
                )}
                {!errors.email && touched.email && (
                  <AiFillCheckCircle className="valid" />
                )}
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className={`input-field ${
                    touched.email && (errors.email ? 'error' : 'success')
                  }`}
                />
                <ErrorMessage className="error" component="div" name="email" />
              </InputWraper>

              <InputWraper>
                {errors.password && touched.password && (
                  <AiFillCloseCircle className="invalid" />
                )}
                {!errors.password && touched.password && !isSubmitting && (
                  <AiFillCheckCircle className="valid" />
                )}
                <HiOutlineLockClosed
                  className={`${
                    touched.password && (errors.password ? 'error' : 'success')
                  }`}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  className={`input-field ${
                    touched.password && (errors.password ? 'error' : 'success')
                  }`}
                />
                {touched.password && !errors.password && (
                  <div className="success-message">Password is secure</div>
                )}
                <ErrorMessage
                  className="error"
                  component="div"
                  name="password"
                />
                {/* <ErrorMessage className="error" component="div" name="password">
                  {message => <div className="error-message">{message}</div>}
                </ErrorMessage> */}
                {/* <ErrorMessage
                  className="warning"
                  component="div"
                  name="password"
                >
                  {message => <div className="warning-message">{message}</div>}
                </ErrorMessage> */}
              </InputWraper>
            </FormFields>
            <button>Sign up</button>
          </Form>
        )}
      </Formik>
    </RegisterFormStyled>
  );
};
export default LoginForm;
