import styled from '@emotion/styled';
import { Button as BaseButton } from '../Button/Button.styled';

export const CustomButton = styled(BaseButton)`
  background-color: transparent;
  color: #23262A;
  border-radius: 24px 44px;
  border: 1px solid green;
`;

export const RecipeTitle = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;

    color: #8BAA36;
`;

export const RecipeText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    text-align: center;
    letter-spacing: -0.02em;

    color: #23262A;
`;

export const RecipeTiming = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    gap: 10px;
    color: rgba(35, 38, 42, 1);
`;