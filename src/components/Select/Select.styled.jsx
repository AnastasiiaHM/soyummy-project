import styled from '@emotion/styled';
import { colors } from 'components/colors';

export const Container = styled.div`
  width: ${props => props.width};
  position: relative;
`;

export const Field = styled.input`
display; block;
width: 100%;
  display: flex;
  justify-content: center;
  border: none;
`;

export const Btn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

export const DropDown = styled.ul`
  width: 100%;
  max-height: 144px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 14px;
`;

export const Item = styled.li`
  width: 100%;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${colors.color1};
`;

export const OptionBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;
