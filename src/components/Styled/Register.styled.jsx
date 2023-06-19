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
  height: 100vh;
  background-color: #fafafa;
  background-image: url(${orderingTab}), url(${rectangleMob});
  background-repeat: no-repeat, no-repeat;
  background-position: center 84px, center 282px;
  background-size: 285px auto, cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 305px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background-position: center 98px, center 440px;
    background-size: 409px auto, cover;

    padding-top: 444px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background-image: url(${ordering}), url(${rectangleDesk});
    background-repeat: no-repeat, no-repeat;
    background-position: 210px, center 400px;
    background-size: 532px auto, cover;
    padding-left: 760px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding-block: 0;
  }

  & .wrapper {
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-block: auto;
    }
  }

  & a {
    display: block;
    color: ${colors.textGreenBtn};
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    text-align: center;
    transition: all 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default RegisterWrapper;
