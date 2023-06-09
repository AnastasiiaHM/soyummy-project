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
  background: url(${backgroundMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-inline: auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 1280px;
    height: 900px;
    background: url(${backgroundTab});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    background: url(${backgroundDesk});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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

  & button {
    border-radius: 24px 44px;
    border: 1px solid transparent;
    color: ${colors.textGreenBtn};

    font-size: 14px;
    line-height: 21px;

    background: ${colors.greenButton};
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: ${colors.darkButton};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 16px;
      line-height: 24px;
    }

    & a {
      display: block;
      padding: 12px 24px;
      color: inherit;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        padding: 22px 44px;
      }
    }

    &.signin {
      background: transparent;
      border: 1px solid ${colors.textGreenBtn};

      &:hover {
        border: 1px solid ${colors.greenButton};
        color: ${colors.greenButton};
      }
    }
  }
`;
