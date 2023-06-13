import { ContainerPagination, StyledPagination } from "./Paginator.styled";

export const Paginator = ({totalPages, page, pageChange}) => {
  return (
    <ContainerPagination>
      <StyledPagination
        count={totalPages}
        page={page}
        onChange={(_, newPage) => pageChange(newPage)}
      />
    </ContainerPagination>
  );
};

export default Paginator;