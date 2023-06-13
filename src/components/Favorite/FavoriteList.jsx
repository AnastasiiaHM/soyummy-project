import Paginator from 'components/Paginator/Paginator';
import FavoriteCard from './FavoriteCard';
import FavoriteCardPlaceholder from './FavoriteCardPlaceholder';
import { List, ListName } from './FavoriteList.styled';

const FavoriteList = ({
  list,
  listName,
  totalPages,
  page,
  itemsPerPage,
  loading,
  pageChange,
  deleteCard,
}) => {
  return (
    <>
      <ListName>{listName}</ListName>
      {loading ? (
        <FavoriteListPlaceholder itemsCount={itemsPerPage} />
      ) : (
        <>
          <List>
            {list.map(card => (
              <FavoriteCard
                key={card._id}
                card={card}
                deleteCard={deleteCard}
              />
            ))}
          </List>
          <Paginator
            totalPages={totalPages}
            page={page}
            pageChange={pageChange}
          />
        </>
      )}
    </>
  );
};

export const FavoriteListPlaceholder = ({ itemsCount }) => {
  const fakeFavorites = Array.from(Array(itemsCount).keys());

  return (
    <List>
      {fakeFavorites.map((_, index) => (
        <FavoriteCardPlaceholder key={index} />
      ))}
    </List>
  );
};

export default FavoriteList;
