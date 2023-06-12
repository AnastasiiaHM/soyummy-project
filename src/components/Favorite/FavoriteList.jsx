import FavoriteCard from './FavoriteCard';
import {
  ContainerPagination,
  List,
  ListName,
  StyledPagination,
} from './FavoriteList.styled';

const FavoriteList = ({
  list,
  listName,
  totalPages,
  page,
  pageChange,
  deleteCard,
}) => {
  return (
    <>
      <ListName>{listName}</ListName>
      <List>
        {list.map(card => (
          <FavoriteCard key={card._id} card={card} deleteCard={deleteCard} />
        ))}
      </List>
      <ContainerPagination>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={(_, newPage) => pageChange(newPage)}
        />
      </ContainerPagination>
    </>
  );
};

export default FavoriteList;
