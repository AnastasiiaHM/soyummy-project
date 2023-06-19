import styled from '@emotion/styled';
import { colors } from 'components/colors';

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Message = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: ${colors.blackFontBolt};
`;

export const RecipesContainer = styled.div`
  width: 375px;
  max-width: 100%;

  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding-top: 72px;
    padding-bottom: 200px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;

    padding-top: 66px;
    padding-bottom: 195px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
