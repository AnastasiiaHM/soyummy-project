import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';
import { colors } from 'components/colors';

export const Input = styled.input`
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  width: ${props => props.width || '100%'};
  padding: 16px 60px 16px 16px;
  background-color: ${colors.greyButton};
  color: ${colors.blackFont};
  border: none;
  border-radius: 6px;
  text-align: right;
  margin-right: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    margin-right: 24px;
  }

  &:focus {
    border: 1px solid #fff;
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: auto;
  margin-right: 5px;
  border: none;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  position: relative;
  width: 30%;
  padding: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 20%;
  }
`;

export const NameLabel = styled.label`
  display: block;
  width: 50%;
  position: relative;
  height: auto;
  margin-right: 18px;
`;

export const DropDown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 8px 18px;
  background-color: #fff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
`;

export const DropdownItem = styled.li`
  width: 100%;
`;

export const IngredientBtn = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 4px 0;
  color: ${colors.color1};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }

  &:hover {
    color: ${colors.greenButton};
  }
`;
