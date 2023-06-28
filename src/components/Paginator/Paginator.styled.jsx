import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { mediaSizes } from "components/constants";

export const StyledPagination = styled(Pagination)`
  background: ${props => props.theme.recipesBackgroundCard};
  box-shadow: ${props => props.theme.isDark ? 'none' : '0px 4px 4px rgba(135, 135, 135, 0.2)'};
  border-radius: 26px;
  padding: 5px 10px;
  width: fit-content;

  .MuiPaginationItem-ellipsis,
  .MuiButtonBase-root {
    color: ${props => props.theme.textPrimaryDark}!important;
  }

  .Mui-selected {
    background-color: ${props => props.theme.constantGreenColor}!important;
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