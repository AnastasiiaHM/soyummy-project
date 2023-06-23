import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { IoIosClose } from 'react-icons/io';

export const WrapperMotivation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalMotivation = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.2s,
    visibility 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
`;
export const ImgMotivation = styled.img`
  border-radius: 30px;
  width: 300px;
  height: 300px;
  position: relative;
  -webkit-filter: invert(10%);
  filter: invert(10%);
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 400px;
    height: 400px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 500px;
    height: 500px;
  }
`;

export const BlureFon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 200px;
  height: 180px;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 268px;
    height: 242px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 268px;
    height: 242px;
  }
`;

export const BtnBlure = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.constantGreenColor};
  position: absolute;
  left: 226px;
  top: 398px;
  z-index: 2;
  cursor: pointer;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 48px;
    height: 48px;
    top: 90%;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 48px;
    height: 48px;
    top: 87%;
  }
`;

export const WrapperBlure = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;

export const CloseInp = styled(IoIosClose)`
  width: 21px;
  height: 29px;
  fill: ${props => props.theme.constWhiteColor};
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 38px;
    height: 45px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 38px;
    height: 45px;
  }
`;

export const TextBlureFon = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.constWhiteColor};
  left: 140px;
  top: 250px;
  position: absolute;
  width: 172px;
  height: 72px;
  z-index: 3;
  left: 50%;
  top: 63%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 220px;
    height: 120px;
    left: 50%;
    top: 65%;

    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 220px;
    height: 120px;
    font-size: 28px;
    line-height: 30px;
    left: 50%;
    top: 65%;
  }
`;

export const WowText = styled.span`
  color: ${props => props.theme.constantGreenColor};
  margin-right: 8px;
`;
