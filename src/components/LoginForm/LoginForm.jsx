import {
  FormFields,
  RegisterFormStyled,
  Caption,
  InputWraper,
} from '../RegisterForm/RegisterForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Sign In</Caption>
          <FormFields>
            <InputWraper>
              <HiOutlineMail />
              <Field
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <HiOutlineLockClosed />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <button>Sign in</button>
        </Form>
      </Formik>
    </RegisterFormStyled>
  );
};
export default LoginForm;
