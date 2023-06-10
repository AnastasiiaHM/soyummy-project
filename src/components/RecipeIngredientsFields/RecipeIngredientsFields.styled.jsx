import styled from '@emotion/styled';
import { colors } from 'components/colors';
import { mediaSizes } from 'components/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 609px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  display: inline-block;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #3e4462;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 92px;
  padding: 4px 0;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 110px;
    padding: 4px 17px;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 44px;
  padding-bottom: 10px;
  height: auto;
  max-height: 260px;
  overflow: auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 24px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 609px;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  gap: 14px;
`;

export const Input = styled.input`
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  width: ${props => props.width || '50%'};
  padding: 16px 60px 16px 16px;
  background-color: ${colors.greyButton};
  color: ${colors.blackFont};
  border: none;
  border-radius: 6px;
  text-align: right;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: auto;
  margin-right: 5px;
  border: none;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  position: relative;
  width: 30%;
  padding: 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 20%;
  }
`;
