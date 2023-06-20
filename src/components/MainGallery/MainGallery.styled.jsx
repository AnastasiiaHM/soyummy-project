import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

export const HomeGallery = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    /* padding-bottom: 40px; */
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    max-width: 1440px;
  }
`;

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

export const MainBtn = styled.button`
  align-self: flex-end;
  ${(props) => css`background-color: ${props.theme.constantGreenColor};`};
  border-radius: 6px;
  border: 0;
  width: 94px;
  height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  ${(props) => css`color: ${props.theme.constWhiteColor};`};
  cursor: pointer;
  &:hover,
  &:focus {
    ${(props) => css`color: ${props.theme.darkButtonBackground}`};
  }
`;
export const StyledLink = styled(Link)`
  width: 94px;
  height: 38px;
  align-self: flex-end;
`;
export const StyledTitle = styled.h1`
   ${(props) => css`color: ${props.theme.titleCategories};`};
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
