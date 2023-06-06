import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';

export const NavigationStyled = styled.ul`
  display: flex;

  align-items: center;
  gap: 14px;
  height: 32px;
  margin-left: auto;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 24px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-left: 20px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    border-left: 2px solid ${colors.color3};
    margin-left: 20px;
    margin-right: auto;
  }
`;
