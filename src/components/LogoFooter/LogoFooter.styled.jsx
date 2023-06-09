import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const ImgLog = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 44px;
    height: 44px;
    margin-right: 12px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 44px;
    height: 44px;
  }
`;
