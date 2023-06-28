import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';

export const Container = styled.div`
  width: ${props => props.width};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  background-color: transparent;
`;

export const Field = styled.input`
  display: block;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  border: none;
  padding-right: 35px;
  background-color: transparent;
  text-align: right;
  pointer-events: none;
  color: ${props => props.theme.textPrimaryDark};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }
`;

export const Btn = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 2px;
  }
`;

export const DropDown = styled.ul`
  position: absolute;
  top: ${props => props.top || '100%'};
  left: 0;
  transform: translate(0, 10px);
  width: 100%;
  max-height: 144px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 14px;
  background-color: ${props => props.theme.dropdownBackground};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-height: 160px;
  }
`;

export const Item = styled.li`
  width: 100%;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.labelText};
  background-color: transparent;
`;

export const OptionBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  width: 100%;
  justify-content: ${props => props.alignText};
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.labelText};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }

  &:hover {
    color: ${props => props.theme.greenButtonBackground};
  }

  &.active {
    color: ${props => props.theme.greenButtonBackground};
  }
`;
