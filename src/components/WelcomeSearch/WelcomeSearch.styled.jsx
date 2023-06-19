import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { colors } from '../colors';

export const FormikWrapper = styled.div`
  & form {
    position: relative;
  }

  input {
    width: 295px;
    background: ${colors.textGreenBtn};
    border: 1px solid ${colors.border};
    outline: none;
    border-radius: 15px 50px;
    padding-top: 17px;
    padding-right: 113px;
    padding-bottom: 17px;
    padding-left: 32px;
    margin-bottom: 8px;
    ::placeholder {
      color: ${colors.placeholder};
    }

    &:not(:placeholder-shown) {
      font-weight: 500;
      font-size: 12px;
      line-height: 1.6;
      color: ${colors.placeholder};

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 16px;
      }
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 362px;
      height: 57px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 510px;
      height: 70px;
    }
  }

  & button {
    position: absolute;
    top: 0;
    right: 0;
    width: 113px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    color: ${colors.whiteColor};
    font-weight: bold;
    background: ${colors.darkButton};
    height: 54px;
    border-radius: 15px 50px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: ${colors.textGreenBtn};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: ${colors.greenButton};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      height: 56px;
      width: 161px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      height: 70px;
    }
  }

  & div {
    position: absolute;
    left: 32px;
    font-size: 12px;
    line-height: 21px;
    color: #e74a3b;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
    }
  }
`;
