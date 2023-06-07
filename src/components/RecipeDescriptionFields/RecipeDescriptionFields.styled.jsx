import styled from '@emotion/styled';
import { colors } from '../colors';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px;
`;

export const ImageLoader = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  background-color: ${colors.greenButton};
`;

export const Input = styled.input`
  display: none;
`;

export const Field = styled.input`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  padding: 18px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  &::placeholder {
    color: ${colors.color1};
  }
`;
