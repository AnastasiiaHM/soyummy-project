import styled from '@emotion/styled';

import { colors } from 'components/colors';

export const Section = styled.section`
  width: 375px;
  max-width: 100%;

  padding-top: 50px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding-top: 72px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 200px;
  }

  @media (min-width: 1440px) {
    width: 1440px;

    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 195px;
  }
`;

export const Title = styled.div`
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.greenButton};
  color: ${colors.textGreenBtn};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;

  list-style: none;
  font-weight: 600;
  font-size: 12px;

  padding: 10px;
  margin-bottom: 32px;

  @media (min-width: 768px) and (max-width: 1439px) {
    filter: none;

    font-size: 18px;
    letter-spacing: 0.03em;

    padding: 20px;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    filter: none;

    padding: 21px 40px;
    margin-bottom: 50px;
  }
`;

export const ListWraper = styled.div`
  display: flex;
  gap: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    gap: 78px;
  }

  @media (min-width: 1440px) {
    gap: 142px;
  }
`;

export const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 44px;
  }

  @media (min-width: 1440px) {
    width: 1160px;

    margin-left: auto;
    margin-right: auto;
  }
`;
