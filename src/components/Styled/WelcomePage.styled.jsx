import styled from '@emotion/styled';

export const WelcomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('components/images/start/start-foto-desc-1x.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 214px;

  & svg {
    margin-bottom: 44px;
  }
`;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 540px;
  margin-bottom: 40px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 18px;
`;
