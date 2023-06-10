import styled from '@emotion/styled';
import ordering from 'components/images/login-register/ordering.png';
import orderingTab from 'components/images/login-register/orderingTab.png';
import rectangleMob from 'components/images/login-register/rectangle_mob1x.png';
// import rectangleTab from 'components/images/login-register/rectangle_tab1x.png';
import rectangleDesk from 'components/images/login-register/rectangle_desc1x.png';
import { mediaSizes } from '../constants';
import { colors } from '../colors';

const RegisterWrapper = styled.div`
  width: 100vw;
  background-image: url(${orderingTab}), url(${rectangleMob});
  background-repeat: no-repeat, no-repeat;
  background-position: center 116px, center 280px;
  background-size: auto 26%, cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 305px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background-position: center 58px, center 440px;
    background-size: auto 38%, cover;

    padding-top: 444px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background-image: url(${ordering}), url(${rectangleDesk});
    background-repeat: no-repeat, no-repeat;
    background-position: 240px 202px, center 400px;
    background-size: auto 50%, cover;
    padding-left: 760px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding-block: 0;
  }

  & .wrapper {
    margin-block: auto;
  }

  & a {
    display: block;
    color: ${colors.textGreenBtn};
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    text-align: center;
  }
`;

export default RegisterWrapper;
