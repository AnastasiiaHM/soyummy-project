import styled from '@emotion/styled';
import { colors } from 'constants';

export const Button = styled.button`
  font-size: 16px;
  padding: 13px 0;
  color: #fff;
  border: none;
  background: ${colors.color1};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.orange {
    width: fit-content;
    height: 44px;
    padding: 0px 25px;
  }
  &.white {
    height: 44px;
    padding: 0px 23px;
    background: #fff;
    color: ${colors.color1};
    border: 2px solid ${colors.color1};
    box-shadow: none;
  }
  &.regLogbutton {
    width: 182px;
  }
  &:hover {
    animation: jelly 0.5s;
  }

  &.totop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: 1px;
    }

    &::before,
    &::after {
      display: none;
    }
  }
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
