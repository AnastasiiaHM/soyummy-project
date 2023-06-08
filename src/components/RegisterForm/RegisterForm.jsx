import {
  FormFields,
  RegisterFormStyled,
  Caption,
  InputWraper,
} from './RegisterForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BiUser } from 'react-icons/bi';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export const RegisterForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Register</Caption>
          <FormFields>
            <InputWraper>
              <BiUser className="icon" />
              <Field
                type="text"
                name="username"
                placeholder="Name"
                autoComplete="off"
              />
              <ErrorMessage className="error" component="div" name="username" />
            </InputWraper>

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
          <button>Sign up</button>
        </Form>
      </Formik>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
