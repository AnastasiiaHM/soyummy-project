import styled from '@emotion/styled';
import { colors } from 'constants';

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${colors.color3};
  padding: 12px 16px;
  outline: none;
  background-color: #fff;
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  & input {
    width: 100%;
    height: 100%;
    color: ${colors.color4};
    margin-top: 20px;
    border: none;
    background-color: #fff;
    border-bottom: 1px solid ${colors.color3};
    padding-bottom: 7px;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: #dddddd;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-22px);
      font-size: 12px;
      font-weight: 100;
      color: ${colors.color2};
    }
  }

  & label {
    position: absolute;
    bottom: 10px;
    left: 2px;
    width: 100%;
    pointer-events: none;
    font-size: 14px;
    color: ${colors.color2};
    transition: all 0.3s ease;
  }

  & .error {
    position: absolute;
    top: 52px;
    font-size: 12px;
    color: ${colors.color1};
    font-weight: 500;
  }
`;

export const ErrorBloodType = styled.div`
  position: absolute;
  top: 50px;
  font-size: 12px;
  color: ${colors.color1};
`;

export const LabelInfo = styled.span``;
