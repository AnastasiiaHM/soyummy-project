import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { transition } from 'helpers';

export const ButtonDiary = styled.button`
  width: 48px;
  height: 48px;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  top: -8px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 50%;
  border: none;
  margin-left: 0px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${transition('opacity')}

  &[disabled] {
    opacity: 0.5;
  }

  &:hover {
    animation: jelly 0.5s;
  }
  /* @media screen and (min-width: ${mediaSizes.mobile}) {
    margin-left: 0px;
    margin-top: 60px;
  } */
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 0px;
    margin-left: 39px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
    margin-top: 0px;
    margin-left: 12px;
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
