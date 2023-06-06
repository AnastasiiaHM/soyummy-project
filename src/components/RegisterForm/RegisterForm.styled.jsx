import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';

export const RegisterFormStyled = styled.div`
  ${container};

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;

export const FormFields = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 240px;
  }
`;
