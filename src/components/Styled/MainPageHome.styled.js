import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import backgroundImageDesc1x from '../../components/images/header/salat/salat-header-desc-1x.png';

const regularFontWeight = '400';
const blackColor = '#000000';
const whiteColor = '#FFFFFF';
const grayColor = '#808080';

export const Container = styled.div`
  margin-left: auto;
  margin-right: -200px;
  width: 578px;
  height: 539px;
  left: 400px;
  top: 126px;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1280px;
  background-image: url(${backgroundImageDesc1x});
  background-size: contain;
  background-position: right bottom; /* Смещение фонового изображения вниз и вправо */
  background-repeat: no-repeat;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 205px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-top: 226px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  width: 700px;
  height: 100px;
  left: 100px;
  top: 226px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  text-align: center;
  letter-spacing: -0.005em;
  margin-bottom: 14px;
  color: ${blackColor};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 24px;
    font-size: 72px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 8px;
    font-size: 100px;
  }
`;

export const TitleText = styled.span`
  position: absolute;
  height: 100px;
  left: 100px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  text-align: center;
  letter-spacing: -0.005em;
  color: #8baa36;
`;

export const Text = styled.p`
  position: absolute;
  width: 465px;
  height: 72px;
  left: 200px;
  top: 340px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #23262a;
  text-align: start;
  white-space: pre-line;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    text-align: left;
    margin-bottom: 32px;
    padding-left: 6px;
    width: 364px;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    line-height: 1.33;
    margin-bottom: 50px;
    width: 467px;
    padding-left: 7px;
  }
`;

export const TipBox = styled.div`
  position: absolute;
  top: 435px;
  right: 34px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  min-height: 92px;
  padding: 8px;
  width: 229px;
  background-color: ${whiteColor};
  border-radius: 8px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    height: 100px;
    top: 372px;
    right: 32px;
    width: 268px;
    padding: 12px 12px 12px 12px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 16px 16px 16px 16px;
    width: 298px;
    top: 472px;
    right: 122px;
    height: 114px;
  }
`;

export const BoxText = styled.p`
  font-weight: ${regularFontWeight};
  font-size: 14px;
  line-height: 1.5;
  color: ${grayColor};
`;

export const DecorBoxText = styled.span`
  color: #8baa36;
`;

export const BoxLinkText = styled.p`
  font-weight: ${regularFontWeight};
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.2px;
  color: inherit;
`;

export const DecorArrowIcon = styled.svg`
  width: 14px;
  height: 12px;
  fill: currentColor;
  /* viewox: 0 0 14 12; */

  path {
    /* d: 'M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5'; */
    stroke-width: 1.5;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
