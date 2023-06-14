import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const CategoriesConteiner = styled.div`
  padding-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 50px;
  }
`;
