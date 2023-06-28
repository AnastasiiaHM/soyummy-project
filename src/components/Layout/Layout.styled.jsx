import styled from '@emotion/styled';
import {mediaSizes} from '../constants/media'


export const LayoutWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.bodyBackground};
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  & svg {
    fill: ${props => props.theme.constantGreenColor};
    width: 40px;
    height: 40px;
   
  }
`;
export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${mediaSizes.tablet}) {
    min-height: 800px;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    min-height: 800px;
  }
`;
