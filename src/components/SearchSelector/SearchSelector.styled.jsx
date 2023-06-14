import styled from '@emotion/styled';
import { colors } from '../colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  padding-right: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.24px;

  color: #001833;
`;

export const SectionLabel = styled.select`
  height: 49px;
  width: 198px;
  padding: 4px;
  color: ${colors.color1};
  font-size: 14px;
  line-height: 1.5;
  border: none;
  appearance: none;
  outline: none;
  border-radius: 6px;
  background-color: #d9d9d975;
  @media (min-width: 768px) {
    width: 146px;
    height: 34px;
  }
  @media (min-width: 1440px) {
    width: 198px;
    height: 49px;
  }
`;

export const Options = styled.option`
  color: ${colors.color1};
  background-color: #d9d9d975;
`;
export const TitleDropdpwn = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: -0.24px;

  color: ${colors.titleColor};

  @media (min-width: 768px) {
    font-size: 14px;
    top: 29%;
    left: 25%;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    top: 26%;
    left: 34%;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  margin-bottom: 90px;
  color: ${colors.color1};
`;
