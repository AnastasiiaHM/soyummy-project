import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants/media';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 72px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: auto;
  }
`;

export const StyledButton = styled.button`
  && {
    margin-right: auto;
    margin-left: 0;
  }
`;
