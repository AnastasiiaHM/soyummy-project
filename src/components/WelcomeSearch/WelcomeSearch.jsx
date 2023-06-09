import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormikWrapper } from './WelcomeSearch.styled';
import { useNavigate } from 'react-router-dom';

export const WelcomeSearch = () => {
  const initialValues = {
    query: '',
  };

  const validationSchema = Yup.object().shape({
    query: Yup.string()
      .min(3)
      .max(20)
      .matches(
        /^[a-zA-Z'-\s]+$/,
        'Name may contain only letters, apostrophe, dash, and spaces.'
      )
      .required(),
  });

  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    const { query } = values;
    const url = `/search?query=${encodeURIComponent(query)}`;
    navigate(url);
    resetForm();
  };

  return (
    <FormikWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, submitCount }) => {
          const hasQueryError =
            submitCount > 0 && touched.query && errors.query;
          return (
            <Form>
              <Field type="text" name="query" placeholder="Search.." />
              {hasQueryError && <ErrorMessage name="query" component="div" />}
              <button type="submit">Search</button>
            </Form>
          );
        }}
      </Formik>
    </FormikWrapper>
  );
};
