import styled from '@emotion/styled';
import { ReactComponent as Image } from '../images/not-found/notFound2x-mobile.svg';
import { colors } from 'components/colors';
import { mediaSizes } from 'components/constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export const StyledText = styled.p`
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${colors.color1};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledSpan = styled.span`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: #000000;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const StyledImage = styled(Image)`
  display: block;
  width: 259px;
  height: 170px;
  margin-bottom: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 498px;
    height: 327px;
  }
`;
