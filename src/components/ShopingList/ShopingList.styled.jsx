import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';

import { colors } from 'components/colors';

export const Section = styled.section`
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

    padding-top: 66px;
    padding-bottom: 195px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: ${colors.titleColor};
  padding-bottom: 50px;
  margin-top: 50px;
  margin-left: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 32px;
    padding-bottom: 72px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 44px;
    margin-top: 100px;
    padding-bottom: 100px;
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
    font-size: 18px;

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

export const ItemsWrapper = styled.div`
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
