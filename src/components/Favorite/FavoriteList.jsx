import Paginator from 'components/Paginator/Paginator';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';
import { List, ListName } from './List.styled';

const  RecipesList = ({
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
        <ListPlaceholder itemsCount={itemsPerPage} />
      ) : (
        <>
          <List>
            {list.map(card => (
              <Card
                key={card.id}
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

export const ListPlaceholder = ({ itemsCount }) => {
  const fakeFavorites = Array.from(Array(itemsCount).keys());

  return (
    <List>
      {fakeFavorites.map((_, index) => (
        <CardPlaceholder key={index} />
      ))}
    </List>
  );
};

export default RecipesList;
