import styled from '@emotion/styled';
import { colors } from 'components/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  display: inline-block;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #3e4462;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 92px;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
`;

export const CounterButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  font-size: 16px;
`;

export const List = styled.div`
  display: flex;
  gap: 14px;
`;

export const Item = styled.li``;

export const Input = styled.input`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  width: ${props => props.width || '194px'};
  padding: 16px;
  background-color: ${colors.greyButton};
  color: #000000;
  border: none;
`;
