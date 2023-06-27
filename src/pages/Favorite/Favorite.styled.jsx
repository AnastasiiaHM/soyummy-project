import styled from '@emotion/styled';

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
  color: ${props => props.theme.titleCategories};

`;

export const RecipesContainer = styled.div`
  width: 375px;
  max-width: 100%;

  padding-bottom: 100px;
  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding-bottom: 200px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 64px;
    padding-bottom: 195px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
