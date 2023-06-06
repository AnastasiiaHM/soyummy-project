import styled from '@emotion/styled';
import { Triangle } from 'react-loader-spinner';
import img from 'images/strawberry-small.png';

export const LoaderStyled = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255 / 65%);
`;

export const LoaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`;

export const StyledTriangle = styled(Triangle)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StrawberryImg = styled.img`
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -18%);
  max-width: initial;
`;

export const LoaderSmallStyled = styled.div`
  margin: 0 auto;
  width: 47px;
  height: 49px;
  background: url(${img}) no-repeat center;
  background-size: contain;
  animation: spin 1.5s infinite linear;

  &.eatenProducts {
    margin: 50px auto;
  }

  &.deleteProduct {
    position: absolute;
    right: -2px;
    top: -4px;
    width: 30px;
    height: 30px;
  }

  &.addProduct {
    position: absolute;
    right: -42px;
    top: 16px;
    width: 30px;
    height: 30px;
  }

  &.addProductMobile {
    width: 30px;
    height: 30px;
    margin-top: -30px;
    position: relative;
    top: 40px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
