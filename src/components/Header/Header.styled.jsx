import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
// import { container } from 'helpers';
import { colors } from '../colors';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 343px;
  margin: 0 auto;
  padding-top: 18px;
  margin-bottom: 50px;
  justify-content: space-between;

  @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
    width: 704px;
    padding-top: 18px;
    margin-bottom: 72px;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    width: 1240px;
    padding-top: 18px;
    margin-bottom: 72px;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  

  @media (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
    margin-left: 187px;
    margin-right: 227px;
  }
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


export const UserIconWrapper = styled.div`
 display: flex;

  @media (min-width: ${mediaSizes.tablet}) {
    
  }

  @media (min-width: ${mediaSizes.desktop}) {
    
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  margin-left: 16px;
  position: absolute;
  bottom: 32px;
`