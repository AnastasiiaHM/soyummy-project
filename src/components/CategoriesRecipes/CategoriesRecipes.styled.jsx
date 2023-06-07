import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const CategoriesNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  list-style: none;
  gap: 28px;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 50px;
  white-space: wrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    line-height: 18px;
    color: #bdbdbd;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 55px;
    margin-top: 100px;
    justify-content: center;
  }

  .navbat {
    border: none;
    background-color: inherit;
    padding: 10px 0px 32px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #e0e0e0;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: 0.5s;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
      line-height: 18px;
      color: #bdbdbd;
    }
    &:hover,
    :active,
    :focus {
      color: #8baa36;
      border-bottom: 2px solid #8baa36;
      transform: scale(1.1);
    }
    &:current {
      border-bottom: #8baa36;
    }
  }
`;

export const CategoriesWrapper = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 200px;
  }
`;
