import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants/media';

export const Container = styled.div`
  width: 375px;
  max-width: 100%;

  padding-bottom: 100px;
  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding-bottom: 200px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 64px;
    padding-bottom: 195px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 320px;
    margin-left: 102px;
    margin-top: 240px;
  }
`;
