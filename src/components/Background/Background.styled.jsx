import styled from '@emotion/styled';
import cloud from 'images/Background/cloud.png';
import strawberry from 'images/Background/strawberry.png';
import banana from 'images/Background/banana.png';
import leafs from 'images/Background/leafs.png';
import leafsTablet from 'images/Background/leafs-tablet.png';
import { mediaSizes } from 'constants';
import { keyframes } from '@emotion/react';

const jelly = keyframes`

  0% {
    transform: scale(1, 1);
  }
  25% {
    opacity: 1;
    transform: scale(1.35, 1);
  }
  50% {
    transform: scale(1, 1.35);
  }
  75% {
    transform: scale(1.15, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const Cloud = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: url(${cloud}) no-repeat right -50px bottom -200px;
    background-size: auto 85%;
    z-index: 0;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${cloud}) no-repeat right bottom;
    background-size: auto 95%;
  }
`;

export const Srtawberry = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: url(${strawberry}) no-repeat right 100px bottom 350px;
    background-size: 300px auto;
    z-index: 0;
    animation: ${jelly} 0.75s ease-in-out 1.05s forwards;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${strawberry}) no-repeat right 100px bottom 100px;
    background-size: 400px auto;
  }
`;

export const Banana = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: url(${banana}) no-repeat bottom right -200px;
    background-size: auto auto;
    z-index: 0;
    opacity: 0;
    animation: ${jelly} 0.75s ease-in-out 0.2s forwards;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${banana}) no-repeat top -50px right -200px;
    background-size: auto auto;
  }
`;

export const Leafs = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: url(${leafsTablet}) no-repeat left 50px bottom 0px;
    background-size: auto 40%;
    z-index: 0;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${leafs}) no-repeat left 300px top 0px;
    background-size: auto 70%;
  }
`;
