import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { mediaSizes } from 'components/constants';

export const BoxStyled = styled(Box)`
  &.MuiBox-root {
    position: fixed;
    top: 20%;
    left: 55%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.recipesBackgroundCard};
    border-radius: 8px;
    padding: 18px;

    @media (min-width: ${mediaSizes.mobile}) {
      width: 330px;
    }
    @media (min-width: ${mediaSizes.tablet}) {
      width: 480px;
    }
    @media (min-width: ${mediaSizes.desktop}) {
      width: 500px;
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: start;

  & > svg {
    width: 18;
    fill: ${props => props.theme.titleCategories};

    &:hover {
    fill: ${props => props.theme.constantGreenColor};
    }
  }
`;
