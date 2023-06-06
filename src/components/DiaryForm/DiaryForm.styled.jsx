import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { Form } from 'formik';
import { transition } from 'helpers';

export const FormikForm = styled(Form)`
  position: relative;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & input[name='search'] {
    width: 280px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 240px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }

  & input[name='grams'] {
    width: 280px;
    text-align: left;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      text-align: right;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
    }

    & + label {
      text-align: right;
    }
  }

  &.mobile {
    display: flex;
    align-items: center;
    flex-direction: column;
    & input {
      width: 100%;

      & + label {
        text-align: left;
      }
    }

    & button {
      margin-top: 60px;
    }
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 15px;
  max-height: 300px;
  width: 350px;
  overflow-y: scroll;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 3;
  top: 50px;
  background-color: white;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f0f1f3;
  }

  ::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-height: 400px;
    width: 400px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    max-height: 350px;
    width: 440px;
  }

  & li {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${colors.color2};

    padding: 10px 0;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 0.5px solid ${colors.color3};
      transition: ${transition};
    }

    &:hover {
      color: ${colors.color4};
    }
  }
`;
