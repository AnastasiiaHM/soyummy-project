import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import salat from '../../components/images/header/salat/salat-header-desc-1x.png';
import spinachLeft from 'components/images/spinach/left.png';
import spinachRight from 'components/images/spinach/right.png';
import bg from 'components/images/spinach/bg2.png';
import bgDesc from 'components/images/spinach/bg2desk.png';
import arrow from 'components/images/spinach/arrow.png';

export const Section = styled.section`
  background-image: url(${salat}), url(${arrow}), url(${spinachRight}),
    url(${spinachLeft}), url(${bg});
  background-size: 328px auto, 10px auto, 720px auto, 15% auto;
  background-position: top 238px center, center, top 68px right -130px, left top,
    right top -150px;
  background-repeat: no-repeat;
  /* width: 100vw; */
  padding: 68px 36px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 140px;
    padding-inline: 32px;

    background-size: 378px auto, 157px auto, 900px auto, 10% auto, 353px auto;
    background-position: top 82px right, top 385px right 82px,
      top -178px right -280px, left -25px top -10px, right top -170px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1000px) {
    background-size: 40% auto, 20% auto, 900px auto, 10% auto, 353px auto;
    background-position: top 42px right, top 385px right 82px,
      top -178px right -280px, left -25px top -10px, right top -170px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-top: 162px;
    padding-inline: 100px;

    background-image: url(${salat}), url(${arrow}), url(${spinachRight}),
      url(${spinachLeft}), url(${bgDesc});
    background-size: 578px auto, 190px auto, 1100px auto, 9% auto, 753px auto;
    background-position: top 82px right 230px, top 500px right 210px,
      top -228px right -120px, left -25px top -10px, right top -50px;
    background-repeat: no-repeat;
  }

  & .wrapper {
    width: 303px;
    margin: 0 auto;
    position: relative;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 700px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 1100px;
    }
  }

  & .main {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      align-items: start;
    }

    & h1 {
      font-weight: 400;
      font-size: 60px;
      line-height: 60px;
      letter-spacing: -0.005em;
      color: #22252a;
      margin-bottom: 14px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 72px;
        line-height: 72px;
        margin-bottom: 24px;
      }

      @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: 100px;
        line-height: 100px;
        margin-bottom: 14px;
      }

      & span {
        color: #8baa36;
      }
    }

    & p {
      width: 228px;
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.02em;
      color: #23262a;
      margin-bottom: 364px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        width: 362px;
        text-align: start;
        margin-left: 6px;
        margin-bottom: 32px;
      }

      @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: 18px;
        line-height: 24px;
        width: 465px;
        margin-bottom: 50px;
      }
    }
  }

  & .tips {
    position: absolute;
    width: 225px;
    height: 92px;
    right: 0;
    top: 303px;
    padding: 8px;

    background: #fafafa;
    border-radius: 8px;
    color: #3e4462;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 261px;
      height: 100px;
      top: 168px;
      right: 8px;
      padding: 12px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      padding: 16px;
      width: 298px;
      height: 114px;
      top: 236px;
    }

    & p {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.24px;
      margin-bottom: 4px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 14px;
        line-height: 18px;
      }

      @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: 14px;
        line-height: 20px;
        width: 230px;
      }

      & span {
        color: #8baa36;
      }
    }

    & .link {
      display: flex;
      gap: 4px;
      align-items: center;
      margin-left: 128px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        margin-left: 150px;
      }

      @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: 14px;
        line-height: 20px;
        width: 250px;
        margin-left: 184px;
      }
    }

    & a {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.2px;

      color: #3e4462;
    }

    & svg {
      fill: #3e4462;
      width: 18px;
      height: 18px;
    }
  }
`;
