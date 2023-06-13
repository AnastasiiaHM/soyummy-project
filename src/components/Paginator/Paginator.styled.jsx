import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { colors } from "components/colors";
import { mediaSizes } from "components/constants";

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