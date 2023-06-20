import styled from '@emotion/styled';
import { IoCloseSharp } from 'react-icons/io5';

import { colors } from 'components/colors';

export const ItemWraper = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid ${colors.borderColor};

  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 43px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 19px;

  display: flex;
  flex-direction: row;
  gap: 46px;

  @media (min-width: 768px) and (max-width: 1439px) {
    right: 45px;

    gap: 110px;
  }

  @media (min-width: 1440px) {
    right: 28px;

    gap: 174px;
  }
`;

export const ProductImage = styled.img`
  height: 60px;

  background-color: ${colors.imageBC};
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 93px;
    height: 97px;
  }
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: #3e4462;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const MeasuresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;

  cursor: pointer;

  &:hover:active {
    fill: ${colors.greenButton};
    color: ${colors.greenButton};
  }
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CloseButton = styled(IoCloseSharp)`
  fill: #333333;
  width: 100%;
  height: 100%;

  transition: fill 0.3s ease;

  &:hover {
    fill: ${colors.greenButton};
  }
  &:focus {
    fill: ${colors.greenButton};
  }
`;
