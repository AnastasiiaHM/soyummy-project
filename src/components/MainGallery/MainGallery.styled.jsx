import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { colors } from '../colors';

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

export const HomeGallery = styled.div`
  padding-top: 320px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MainBtn = styled.button`
  align-self: flex-end;
  background-color: ${colors.greenButton};
  border-radius: 6px;
  border: 0;
  width: 94px;
  height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.textGreenBtn};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${colors.darkButton};
  }
`;
export const StyledLink = styled.link`
  display: flex;
  width: 94px;
  height: 38px;
  align-self: flex-end;
`;
