import styled from '@emotion/styled';
import { colors } from '../colors';
import { mediaSizes } from '../constants/media';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  margin-bottom: 44px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 32px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    align-items: flex-start;
  }
`;

export const FieldsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-shrink: 1;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 393px;
  }
`;

export const ImageLoader = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  background-color: ${colors.greenButton};
  cursor: pointer;
  flex-shrink: 0;

  svg {
    fill: #fff;
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 279px;
    height: 268px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 357px;
    height: 344px;
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 8px;
  object-fit: cover;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  z-index: 3;
  background-color: ${colors.color1};
  cursor: pointer;
  color: #fff;
`;

export const Input = styled.input`
  display: none;
`;

export const Field = styled.input`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${colors.color1};
  padding: 18px 0;
  border: none;
  border-bottom: ${props => props.border};
  background-color: transparent;

  &::placeholder {
    color: ${colors.color1};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  z-index: ${props => props.zIndex};
  background-color: transparent;
  border-bottom: 1px solid #e0e0e0;
`;

export const ValidationInfo = styled.span`
  color: red;
  font-size: 11px;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 11px;
  }
`;
