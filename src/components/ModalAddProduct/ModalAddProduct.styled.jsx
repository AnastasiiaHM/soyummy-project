import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

const headerHeight = '80px';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 3;
  top: ${headerHeight};
  left: 0;
  width: 100%;
  height: calc(100% - ${headerHeight});
  opacity: 1;
  ${transition('visible')};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 100%;
    z-index: 5;
    top: 0;
    background-color: rgba(33, 33, 33, 0.12);
  }

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
    }
  }

  & .modal {
    position: fixed;
    top: ${headerHeight};
    left: 50%;
    width: 100%;
    height: calc(100% - ${headerHeight});
    transform: translateX(-50%) translateY(0px);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 50%;
      width: 672px;
      height: auto;
      max-width: calc(100% - 24px * 2);
      transform: translateX(-50%) translateY(-50%);
    }
  }

  & .inner {
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 80px 40px;
    background-color: #ffffff;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px 82px 82px 82px;
    }
  }

  & .close {
    background-color: #eff1f3;
    width: 100%;
    height: 40px;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      background-color: transparent;
      border: none;

      width: 20px;
      height: 20px;
      right: 24px;
      top: 24px;
      ${transition('transform')}

      &:hover {
        transform: scale(1.2);
      }

      &__icon {
        fill: #000000;
        width: 20px;
        height: 20px;
      }
    }
  }

  & .return__icon {
    margin-left: 20px;
    width: 12px;
    height: 7px;
    cursor: pointer;
    ${transition('transform')}

    &:hover {
      transform: scale(1.2);
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      position: absolute;
    }
  }
`;
