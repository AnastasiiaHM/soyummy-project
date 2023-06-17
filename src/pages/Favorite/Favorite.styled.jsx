import styled from '@emotion/styled';
import { colors } from 'components/colors';
import { mediaSizes } from '../../components/constants/media';

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
  margin-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 200px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 100px;
  }
`;
