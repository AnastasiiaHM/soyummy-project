import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';

export const Title = styled.h3`
  font-family: 'Poppins';
  display: inline-block;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.textPrimaryDark};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 32px;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.placeholderAddRecipes};
  background-color: ${props => props.theme.inputBackground};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 505px;
    font-size: 18px;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.placeholderAddRecipes};
  }
`;

export const ValidationInfo = styled.span`
  color: ${props => props.theme.constRedColor};
  font-size: 11px;
  background-color: transparent;
  position: absolute;
  padding: 0;
  top: 100%;
  left: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 32px;
  }
`;
