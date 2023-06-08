import styled from '@emotion/styled';
import backgroundDesk from 'components/images/start/start-foto-desc-1x.jpg';
import backgroundTab from 'components/images/start/start-foto-tb-1x.jpg';
import backgroundMob from 'components/images/start/start-foto-mob-1x.jpg';
import { colors } from '../colors';
import { mediaSizes } from '../constants';

export const WelcomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 275px;
  color: ${colors.textGreenBtn};
  background: url(${backgroundMob}) no-repeat;
  margin-inline: auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 1280px;
    height: 900px;
    background: url(${backgroundTab}) no-repeat;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${backgroundDesk}) no-repeat;
  }

  & svg {
    margin-bottom: 28px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 44px;
    }
  }
`;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 305px;
  margin-bottom: 44px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 505px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 540px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 18px;
  }
`;
