import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { colors } from 'components/colors';
import { Pagination } from '@mui/material';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 50px;
  }
`;

export const ListName = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: ${colors.titleColor};
  padding-bottom: 50px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 32px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 44px;
  }
`;

export const StyledPagination = styled(Pagination)`
  background: ${colors.textGreenBtn};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  padding: 5px 10px;
  width: fit-content;

  .Mui-selected {
    background-color: ${colors.imageBC}!important;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 10px 15px;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
