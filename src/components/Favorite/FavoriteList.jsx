import Paginator from 'components/Paginator/Paginator';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';
import { List, ListName } from './List.styled';

const RecipesList = ({
  list,
  listName,
  totalPages,
  page,

  loading,
  pageChange,
  deleteCard,
}) => {
  return (
    <>
      <ListName>{listName}</ListName>
      <>
        <List>
          {loading ? (
            <CardPlaceholder key={'placeholder'} />
          ) : (
            list.map(card => (
              <Card key={card.id} card={card} deleteCard={deleteCard} />
            ))
          )}
        </List>
        <Paginator
          totalPages={totalPages}
          page={page}
          pageChange={pageChange}
        />
      </>
    </>
  );
};

export default RecipesList;
