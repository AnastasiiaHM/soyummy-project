import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormikWrapper } from './WelcomeSearch.styled';

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

  const handleSubmit = values => {
    const { query } = values;
    const url = `/soyummy-project/search?query=${encodeURIComponent(query)}`;
    window.location.href = url;
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
