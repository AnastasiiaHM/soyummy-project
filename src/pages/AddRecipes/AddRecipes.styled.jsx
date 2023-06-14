import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1280px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 320px;
    margin-left: 102px;
  }
`;
