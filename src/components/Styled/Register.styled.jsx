import styled from '@emotion/styled';
import ordering from 'components/images/login-register/ordering.png';
import rectangleMob from 'components/images/login-register/rectangle_mob1x.png';
// import rectangleTab from 'components/images/login-register/rectangle_tab1x.png';
import rectangleDesk from 'components/images/login-register/rectangle_desc1x.png';
import { mediaSizes } from '../constants';

const RegisterWrapper = styled.div`
  background-image: url(${ordering}), url(${rectangleMob});
  background-repeat: no-repeat, no-repeat;
  background-position: center 64px, center 280px;
  background-size: auto 35%, cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background-position: center 32px, center 440px;
    background-size: auto 45%, cover;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    background-image: url(${ordering}), url(${rectangleDesk});
    background-repeat: no-repeat, no-repeat;
    background-position: 80px 122px, center 400px;
    background-size: auto 75%, cover;
  }

  & a {
    color: #fafafa;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
  }
`;

export default RegisterWrapper;
