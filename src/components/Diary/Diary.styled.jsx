import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { container, transition } from 'helpers';

export const DiaryStyled = styled.div`
  ${container}
  margin-top: 140px;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 60%;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  & .mobile-diary-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: ${mediaSizes.mobile}) {
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      align-items: flex-start;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      align-items: flex-start;
    }
  }

  & .Diary__input_name::placeholder {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #9b9faa;
  }
  & .Diary__input_grams::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: left;
    letter-spacing: 0.04em;

    color: #9b9faa;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      text-align: left;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      text-align: right;
    }
    @media screen and (min-width: ${mediaSizes.mobile}) {
      text-align: right;
    }
  }
  & .Diary__list-name {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    font-weight: 400;
    flex-basis: 100%;
    margin-right: 8px;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      flex-basis: auto;
      width: 240px;
      margin-right: 48px;
      padding-bottom: 20px;
    }
  }
  & .Diary__list-gram {
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;
    font-weight: 400;
    white-space: nowrap;
    margin-right: 8px;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 49px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      margin-right: 32px;
      padding-bottom: 20px;
    }
  }
  & .Diary__list-kcal {
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;
    font-weight: 400;
    white-space: nowrap;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 58px;
    margin-right: 17px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      margin-right: 32px;
      padding-bottom: 20px;
    }

    & span {
      font-size: 12px;
    }
  }

  & .Diary__btn-delete {
    background-color: transparent;
    border: none;
    width: 15px;
    height: 15px;
    color: #9b9faa;
    margin-right: 20px;
    cursor: pointer;
    ${transition('color')}

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-right: 40px;
    }

    &:hover {
      animation: jelly 0.5s;
      color: ${colors.color1};
    }

    @keyframes jelly {
      25% {
        transform: scale(0.9, 1.1);
      }

      50% {
        transform: scale(1.1, 0.9);
      }

      75% {
        transform: scale(0.95, 1.05);
      }
    }
  }

  & .Diarty__list {
    display: flex;
    position: relative;
    /* gap: 10px; */
  }

  & .Diary__list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      gap: 16px;
    }
  }

  & .Diarty__header-wrapper {
    position: relative;
    width: 100%;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: auto;
      align-items: flex-start;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      pointer-events: none;
      width: 100%;
      height: 40px;
      background-image: linear-gradient(
        0deg,
        #ffffff 18%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  & .Diary__header-wraper-data {
    display: flex;
    align-items: center;
    height: 20px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 60px;
      height: 38px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 60px;
      height: 38px;
    }
  }
  & .Diary__data {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    margin-right: 21px;
    color: #212121;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 34px;
      line-height: 41px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 34px;
      line-height: 41px;
    }
  }
  & .Diary__icon-data {
    width: 25px;
    height: 25px;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      width: 15px;
      height: 15px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 25px;
      height: 25px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 25px;
      height: 25px;
    }
  }
  & .Diary__btn-add {
    width: 48px;
    height: 48px;
    background: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 50%;
    border: none;
    margin-left: 0px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      animation: jelly 0.5s;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      display: none;
    }

    @keyframes jelly {
      25% {
        transform: scale(0.9, 1.1);
      }

      50% {
        transform: scale(1.1, 0.9);
      }

      75% {
        transform: scale(0.95, 1.05);
      }
    }
  }
`;

export const DiaryStyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 280px;
  position: relative;
  overflow-y: auto;
  margin-top: 32px;
  margin-right: -20px;
  padding-right: 5px;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f0f1f3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #264061;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 60px;
  }

  & > li:last-child {
    margin-bottom: 14px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 6px;
    }
  }
`;

export const EmptyProductsMessage = styled.p`
  margin-top: 30px;
  color: ${colors.color2};
`;
