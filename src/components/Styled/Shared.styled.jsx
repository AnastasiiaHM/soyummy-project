import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: ${props => props.theme.titleCategories};
  padding-bottom: 50px;
  margin-top: 50px;

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

export const ButtonBase = styled.button`
  display: block;
  margin: 0 auto;
  width: 161px;
  height: 52px;
  font-style: normal;
  font-weight: 400;
  background: transparent;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.textPrimaryDark};
  border: 1px solid ${props => props.theme.constantGreenColor};
  border-radius: 24px 44px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 24px 44px;

  &:hover,
  &:focus {
    background: ${props => props.theme.constantGreenColor};
    color: ${props => props.theme.constWhiteColor};
  }
  
  @media (min-width: 768px) {
    width: 184px;
    height: 57px;
  }
`;
