import styled from '@emotion/styled';
import { container, transition } from 'helpers';
import { Button } from 'components/Styled';
import { ErrorMessage } from 'formik';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';
import { Field } from 'formik';

export const ButtonCalc = styled(Button)`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 210px;
    margin-left: 320px;
  }
`;

export const CalculatorStyled = styled.div`
  ${container};
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 100px;
    align-items: flex-start;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 0;
    margin: 0;
    padding-top: 140px;
    width: 60%;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: ${colors.color4};
    text-align: left;
    margin-bottom: 34px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 554px;
      font-size: 34px;
      font-weight: 700;
      line-height: 1.41;
      margin-bottom: 68px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 608px;
      margin-bottom: 60px;
    }
  }
`;

// export const FormEl = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin-top: 34px;

//   @media screen and (min-width: ${mediaSizes.tablet}) {
//     margin-top: 68px;
//   }
// `;

export const FormWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  /* gap: 32px; */

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 60px;
    flex-direction: row;
    gap: 30px;
  }
`;

export const InputsWrapper = styled.div``;

export const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
`;
export const RadioTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 14px;
  text-align: left;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${colors.color2};
  border-bottom: 1px solid ${colors.color3};
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.color3};
  }
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  color: ${colors.color2};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
    color: ${colors.color1};
  }
  &:focus-within {
    font-weight: 700;
    color: ${colors.color1};
  }
`;
export const RadioInput = styled(Field)`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 22px;
  height: 22px;
  align-items: center;
  appearance: none;
  background-color: #fff;
  color: ${colors.color1};
  border: 1px solid ${colors.color3};
  border-radius: 50%;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);

    ${transition('transform')};
    box-shadow: inset 10px 10px ${colors.color1};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
    outline: 1px solid ${colors.color3};
  }
`;

export const ErrorMSG = styled(ErrorMessage)`
  padding-top: 7px;
  font-size: 12px;
  color: ${colors.color1};
  font-weight: 500;
`;
