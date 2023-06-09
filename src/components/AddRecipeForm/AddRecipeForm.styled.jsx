import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants/media';

export const StyledTitle = styled.h2`
  display: block;
  margin-bottom: 72px;
  width: 100%;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 100px;
  }
`;

export const Form = styled.form`
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
