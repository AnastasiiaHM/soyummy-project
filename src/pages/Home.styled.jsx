import styled from '@emotion/styled';
import { ButtonBase } from 'components/Styled/Shared.styled';

export const OtherCategoriesButton = styled(ButtonBase)`
  width: 150px;
  height: 35px;
  font-size: 10px;
  line-height: 15px;
  border-radius: 24px 44px;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 184px;
    height: 57px;
    font-size: 16px;
    line-height: 24px;
  }
`;
