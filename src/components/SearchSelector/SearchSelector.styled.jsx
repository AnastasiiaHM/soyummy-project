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
export const Section = styled.section`
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 72px;
  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const SectionLabel = styled.select`
  width: 146px;
  padding: 8px 14px;
  color: ${colors.color1};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border-radius: 6px;
  background-color: #d9d9d975;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'%3E%3Cpath stroke='%238BAA36' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m5 7 5 5 5-5'/%3E%3C/svg%3E");
  background-position: right 14px center;
  background-repeat: no-repeat;

  position: relative;

  @media (min-width: 768px) {
    width: 175px;
    padding: 10px 14px;
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 198px;
    padding: 14px;
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
