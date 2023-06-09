import styled from '@emotion/styled';
import { colors } from 'components/colors';
import { mediaSizes } from 'components/constants';

export const Title = styled.h3`
  font-family: 'Poppins';
  display: inline-block;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #3e4462;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 32px;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  border: none;
  border-radius: 6px;
  color: ${colors.color1};
  background-color: ${colors.greyButton};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 505px;
    font-size: 18px;
    margin-bottom: 32px;
  }
`;
