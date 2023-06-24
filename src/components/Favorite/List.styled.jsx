import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 50px;
  }
`;