import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';

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
  width: 343px;
  margin-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 704px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1240px;
    margin-bottom: 100px;
  }
`;
