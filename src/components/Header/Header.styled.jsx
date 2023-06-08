import styled from '@emotion/styled';
// import { mediaSizes } from 'constants/media';
// import { container } from 'helpers';
import { colors } from '../colors';

export const TabsWrapper = styled.div`
  margin-left: 187px;
  margin-right: 227px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 1240px;
  margin: 0 auto;
  padding-top: 18px;
`;

export const UserWrapper = styled.div`
  display: flex;
  margin-right: 53px;
  align-items: center;
  gap: 14px;
  
`;

export const UserTextsName = styled.div`
  font-weight: 600;
  font-size: '14px';
  font-style: normal;
  color: ${colors.darkButton};
`;