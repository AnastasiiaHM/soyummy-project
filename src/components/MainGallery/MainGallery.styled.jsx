import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { colors } from '../colors';
import { Link } from 'react-router-dom';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    /* padding-bottom: 40px; */
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    /* padding-bottom: 50px; */
    width: 1440px;
  }
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
export const StyledLink = styled(Link)`
  width: 94px;
  height: 38px;
  align-self: flex-end;
`;
export const StyledTitle = styled.h1`
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  align-self: flex-start;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DownBtn = styled.button`
  margin-top: 14px;
`;
