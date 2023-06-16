import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const CategoriesConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  max-width: 375px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-bottom: 40px;
    max-width: 768px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 50px;
    max-width: 1440px;
  }
`;
