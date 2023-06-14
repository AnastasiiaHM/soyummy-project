import styled from '@emotion/styled';

import { colors } from 'components/colors';

export const Wraper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 200px;
  }
`;

export const EmptyImage = styled.img`
  padding-bottom: 24px;
  width: 208px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-bottom: 32px;
    width: 350px;
  }
`;

export const EmptyDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  text-align: center;

  color: ${colors.blackFontBolt};

  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
