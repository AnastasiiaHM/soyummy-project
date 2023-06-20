import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const colorChange = keyframes`
  0% {
    ${(props) => css`fill: ${props.theme.userNameText};`}
  }
  50% {
    ${(props) => css`fill: ${props.theme.constantGreenColor};`}

  }
  100% {
    ${(props) => css`fill: ${props.theme.userNameText};`}
  }
`;

export const LayoutWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  & svg {
    ${(props) => css`fill: ${props.theme.constantGreenColor};`}
    stroke: red;
    width: 40px;
    height: 40px;
    animation: ${colorChange} 1s infinite alternate;
  }
`;
export const WrapperSection = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
