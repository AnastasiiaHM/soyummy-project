import { ContainerPagination, StyledPagination } from './Paginator.styled';

export const Paginator = ({ totalPages, page, pageChange }) => {
  const uppPageHandler = newPage => {
    pageChange(newPage);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return totalPages > 1 ? (
    <ContainerPagination>
      <StyledPagination
        count={totalPages}
        page={page}
        onChange={(_, newPage) => uppPageHandler(newPage)}
      />
    </ContainerPagination>
  ) : (
    <></>
  );
};

export default Paginator;
