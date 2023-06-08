import styled from '@emotion/styled';
import { colors } from 'components/colors';

export const Title = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #3e4462;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  border: none;
  border-radius: 6px;
  color: ${colors.color1};
  background-color: ${colors.greyButton};
`;
