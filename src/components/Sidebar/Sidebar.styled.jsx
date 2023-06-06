import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';
import imagetab from 'images/Sidebarimg/imgtab2x.png';

export const SidebarStyled = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f0f1f3;
  position: relative;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-bottom: 80px;
    padding-top: 80px;
    background: url(${imagetab}) bottom right #f0f1f3 no-repeat;
    background-size: 335px 510px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 140px 0 0 106px;
    background: none;
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0;

    &::before {
      content: '';
      position: fixed;
      z-index: -2;
      width: 300px;
      transform: translateX(-106px);
      top: 0;
      bottom: 0;
      background-color: #f0f1f3;
    }
  }

  & .container {
    ${container}

    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }

  & .summary {
    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-right: 132px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      padding-right: 142px;
      margin-bottom: 60px;
      margin-right: 0;
    }
  }

  & .title {
    margin-bottom: 29px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    color: #212121;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 40px;
    }
  }

  & .item {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #9b9faa;

    display: flex;
    justify-content: space-between;
  }

  & .item:last-child {
    margin-bottom: 0;
  }

  & .listData {
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    list-style: none;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 255px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 272px;
      margin-bottom: 60px;
    }
  }

  & .title__name {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #9b9faa;
  }
`;

export const ForbiddenProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 180px;
  position: relative;
  overflow-y: auto;
  width: 100%;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f0f1f3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 280px;
    width: auto;
  }

  & li {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #9b9faa;
  }
`;
