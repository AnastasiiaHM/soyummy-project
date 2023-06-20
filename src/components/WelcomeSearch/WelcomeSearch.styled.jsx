import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const FormikWrapper = styled.div`
  & form {
    position: relative;
  }

  input {
    width: 295px;
    background: ${props => props.theme.recipesBackgroundCard};
    border: 1px solid ${props => props.theme.bordercolor};
    outline: none;
    border-radius: 15px 50px;
    padding-top: 17px;
    padding-right: 113px;
    padding-bottom: 17px;
    padding-left: 32px;
    margin-bottom: 8px;
    ::placeholder {
      color: ${props => props.theme.placeholderAddRecipes};
    }

    &:not(:placeholder-shown) {
      font-weight: 500;
      font-size: 12px;
      line-height: 1.6;
      color: ${props => props.theme.placeholderAddRecipes};

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
    color: ${props => props.theme.constWhiteColor};
    font-weight: bold;
    background: ${props => props.theme.darkButtonBackground};
    height: 54px;
    border-radius: 15px 50px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${props => props.theme.greenButtonBackground}
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
