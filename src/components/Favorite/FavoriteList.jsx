import Paginator from 'components/Paginator/Paginator';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';
import { ShoppingListEmpty } from 'components/ShopingList/ShoppingListEmpty/ShoppingListEmpty';
import { List, ListName } from './List.styled';

const RecipesList = ({
  list,
  listName,
  totalPages,
  page,
  itemsPerPage,
  loading,
  pageChange,
  deleteCard,
}) => {
  console.log(loading);
  return (
    <>
      <ListName>{listName}</ListName>

      {!loading && list?.length === 0 ? (
        <ShoppingListEmpty message="You don't have favourite recipes yet" />
      ) : loading ? (
        <CardPlaceholder itemsCount={itemsPerPage} />
      ) : (
        <>
          <List>
            {list.map((card, index) => (
              <Card
                key={`${card.cardId}-${index}`}
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

export default RecipesList;
