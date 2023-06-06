import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { container } from 'helpers';
import imagedesk from 'images/Sidebarimg/imgdesk2x.png';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 55px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    ${container}
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &::before {
    content: '';
    display: none;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: block;
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100vh;
      ${({isLoggedIn}) => {
        if (isLoggedIn) {
          return `background: url(${imagedesk}) top 20px right #f0f1f3 no-repeat;      
          background-size: auto 900px;`
        }
      }}
    }
  }
`;
