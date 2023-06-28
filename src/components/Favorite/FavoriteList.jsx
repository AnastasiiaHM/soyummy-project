import Paginator from 'components/Paginator/Paginator';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';
import { ShoppingListEmpty } from 'components/ShopingList/ShoppingListEmpty/ShoppingListEmpty';
import { List } from './List.styled';
import { Title } from 'components/Styled/Shared.styled';

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
  return (
    <>
      <Title>{listName}</Title>

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
