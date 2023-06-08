import styled from '@emotion/styled';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const ListName = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: #001833;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const Container = styled.div`
  padding: 50px 16px 100px 16px;

  @media screen and (min-width: 768px) {
    padding: 72px 32px 200px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px;
  }
`;
