import styled from '@emotion/styled';
import assortment from '../images/assortment/assortment-vegetables-2x.jpg'
import { mediaSizes } from 'components/constants';

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
  background: url(${assortment}) 
  no-repeat top 0px left 0px;
  background-size: cover;
  height: 455px;

  @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
    no-repeat top 0px left 0px;
    background-size: cover;
    height: 495px;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    no-repeat top 0px left 0px;
    background-size: cover;
    height: 493px;
  }
`;
