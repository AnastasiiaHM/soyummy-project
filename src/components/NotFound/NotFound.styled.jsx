import styled from '@emotion/styled';
import { colors } from 'constants';

export const NotFoundStyled = styled.div`
  padding: 200px 0;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #00000084;

  & span {
    color: ${colors.color1};
    font-size: 120px;
  }
`;
