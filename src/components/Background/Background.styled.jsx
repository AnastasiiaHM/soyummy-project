import styled from '@emotion/styled';
import assortment from '../images/assortment/assortment-vegetables-2x.jpg';
import { mediaSizes } from 'components/constants';
import spynath from '../images/header/spinach/spinach-right-desc-header-2x.png';
// import salatHero from '../images/header/salat/salat-header-desc-2x.png';

export const Wrapper = styled.div`
  position: relative;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const Assortment = styled.div`
  background: url(${assortment}) no-repeat top 0px left 0px;
  background-size: cover;
  height: 455px;

  @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
    background: no-repeat top 0px left 0px;
    background-size: cover;
    height: 495px;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    background: no-repeat top 0px left 0px;
    background-size: cover;
    height: 493px;
  }
`;

export const MobMenuWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  color: ${props => props.theme.deleteBackgroundBtn};
`;

export const Spynath = styled.div`
  background: url(${spynath}) no-repeat bottom -20px right -180px;
  background-size: cover;
  height: 405px;
  transform: rotate(45deg);
  background-color: ${props => props.theme.deleteBackgroundBtn};

  @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
    background: no-repeat top 0px left 0px;
    background-size: cover;
    height: 495px;
    background-color: ${props => props.theme.deleteBackgroundBtn};
  }
`;

// export const Salat = styled.div`
//   background: url(${salatHero});
//   background-size: 328px auto;
//   background-position: top 238px center;
//   background-repeat: no-repeat;
//   width: 100vw;
//   padding: 68px 36px;

//   @media screen and (min-width: ${mediaSizes.tablet}) {
//     padding-top: 140px;
//     padding-inline: 32px;

//     background-size: 378px auto;
//     background-position: top 82px right;
//     background-repeat: no-repeat;
//   }

//   @media screen and (min-width: 1000px) {
//     background-size: 40% auto;
//     background-position: top 42px right;
//   }

//   @media screen and (min-width: ${mediaSizes.desktop}) {
//     padding-top: 162px;
//     padding-inline: 100px;

//     background-size: 578px auto;
//     background-position: top 82px right 230px;
//     background-repeat: no-repeat;
//   }
// `;
