import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const MainGalleryStyled = styled.ul`
  display: flex;
  gap: 28px;
  justify-items: center;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-top: 50px;
    padding-bottom: 50px;
    grid-column-gap: 14px;
    grid-row-gap: 100px;
  }
`;
