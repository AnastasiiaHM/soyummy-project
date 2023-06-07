import styled from '@emotion/styled';
import { colors } from 'constants';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 161px;
  height: 70px;

  background: ${colors.greenButton};

  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: ${colors.textGreenBtn};
  border: 1px solid ${colors.greenButton};
  border-radius: 24px 44px;

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 24px 44px;
  &:hover,
  &:focus {
    background: ${colors.darkButton};
  }
  &.blackBtn {
  }

  @media (min-width: 768px) {
    width: 239px;
    height: 61px;
  }
`;
