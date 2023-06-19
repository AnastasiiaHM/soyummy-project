import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { colors } from 'components/colors';

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

export const ListName = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: ${colors.titleColor};
  padding-bottom: 50px;
  margin-top: 50px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 32px;
    padding-bottom: 72px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 44px;
    margin-top: 100px;
    padding-bottom: 100px;
  }
`;
