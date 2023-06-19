import styled from '@emotion/styled';
import { colors } from '../colors';
import { mediaSizes } from '../constants';

export const RegisterFormStyled = styled.div`
  background-color: ${colors.registerBcg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 32px 28px;
  margin-bottom: 18px;
  margin-inline: auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 44px 50px;
    width: 500px;
  }

  & button {
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    background-color: ${colors.greenButton};
    border-radius: 6px;
    height: 45px;
    border: none;
    color: ${colors.textGreenBtn};
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: ${colors.darkButton};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      height: 59px;
    }
  }
`;

export const Caption = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.textGreenBtn};
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 28px;
    line-height: 30px;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 28px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
  }
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;

  & svg {
    width: 18px;
    height: 18px;
    stroke: ${colors.textGreenBtn};
    opacity: 0.6;
    position: absolute;
    top: 13px;
    left: 14px;

    &.error {
      stroke: ${colors.error};
      opacity: 1;
    }

    &.success {
      stroke: ${colors.success};
      opacity: 1;
    }

    &.icon {
      fill: ${colors.textGreenBtn};

      &.error-icon {
        fill: ${colors.error};
        opacity: 1;
      }

      &.success-icon {
        fill: ${colors.success};
        opacity: 1;
      }
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 24px;
      height: 24px;
      top: 16px;
      left: 18px;
    }
  }

  & div {
    position: absolute;
    font-size: 12px;
    line-height: 21px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
    }

    &.error {
      color: ${colors.error};
    }

    &.success-message {
      color: ${colors.success};
    }
  }

  & input {
    border: 1px solid rgba(250, 250, 250, 0.2);
    border-radius: 6px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 12px 40px;
    color: ${colors.textGreenBtn};
    opacity: 0.8;

    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      border: 1px solid ${colors.whiteColor};
    }

    &.error {
      border: 1px solid ${colors.error};
      opacity: 1;
    }

    &.success {
      border: 1px solid ${colors.success};
      opacity: 1;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
      line-height: 27px;
      padding: 16px 50px;
    }

    &::placeholder {
      font-weight: 400;
      color: ${colors.textGreenBtn};

      opacity: 0.8;
    }

    &:focus::-webkit-input-placeholder {
      color: ${colors.whiteColor};
      opacity: 1;
    }

    &:hover,
    placeholder {
      stroke: ${colors.whiteColor};
      fill: ${colors.whiteColor};
      color: ${colors.whiteColor};
      border-color: ${colors.whiteColor};
      opacity: 1;
    }
  }

  & .invalid,
  .valid {
    width: 18px;
    height: 18px;
    fill: ${colors.error};
    opacity: 1;
    position: absolute;
    top: 13px;
    left: 216px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 24px;
      height: 24px;
      top: 16px;
      left: 360px;
    }
  }

  & .valid {
    fill: ${colors.success};
  }
`;
