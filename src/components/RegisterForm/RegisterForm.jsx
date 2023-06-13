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
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/';
  //   navigate(path);
  // };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    //if (!message) resetForm();
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, 'Please enter only letters')
      .min(3)
      .max(254)
      .required(),
    email: yup.string().email().min(3).max(254).required(),
    password: yup.string().min(8).max(100).required(),
  });

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form autoComplete="off">
            <Caption>Registration</Caption>
            <FormFields>
              <InputWraper>
                <BiUser
                  className={`icon ${
                    touched.name &&
                    (errors.name ? 'error-icon' : 'success-icon')
                  }`}
                />
                {errors.name && touched.name && (
                  <AiFillCloseCircle className="invalid" />
                )}
                {!errors.name && touched.name && (
                  <AiFillCheckCircle className="valid" />
                )}
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  className={` ${
                    touched.name && (errors.name ? 'error' : 'success')
                  }`}
                />
                <ErrorMessage className="error" component="div" name="name" />
              </InputWraper>

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

export default RegisterForm;
