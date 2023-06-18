import styled from '@emotion/styled';

import { colors } from 'components/colors';

export const ProductMeasures = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 10px;
  color: ${colors.textGreenBtn};

  min-width: 37px;
  height: 23px;

  padding: 4px 4px;

  background-color: ${colors.greenButton};
  border-radius: 4px;

  @media (min-width: 768px) {
    min-width: 68px;
    height: 35px;

    padding: 4px 8px;

    font-weight: 600;
    font-size: 18px;
  }
`;
