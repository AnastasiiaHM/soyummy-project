import { ShoppingListItems } from './ShopingListItem/ShopingListItem';
import { fetchShoppingList } from 'redux/shopping-list/operations';
import { ShoppingListEmpty } from './ShoppingListEmpty/ShoppingListEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  Section,
  Title,
  List,
  ListWraper,
  ItemsWrapper,
} from './ShopingList.styled';

export const ShoppingListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  useEffect(() => {}, []);

  const shoppingList = useSelector(state => {
    const newShoppingList = state.shoppingList.shoppingList.filter(
      ({ ingredientId }) => ingredientId !== state.shoppingList.deletedProductId
    );

    return newShoppingList;
  });

  return (
    <Section>
      <Title className="title">Shopping list</Title>

      {shoppingList.length === 0 ? (
        <ShoppingListEmpty />
      ) : (
        <>
          <List>
            <li>
              <p>Product</p>
            </li>
            <li>
              <ListWraper>
                <p>Number</p>
                <p>Remove</p>
              </ListWraper>
            </li>
          </List>
          <ItemsWrapper>
            {shoppingList?.map(({ image, ingredientId, measure, name }) => (
              <ShoppingListItems
                key={ingredientId}
                id={ingredientId}
                image={image}
                measure={measure}
                name={name}
              ></ShoppingListItems>
            ))}
          </ItemsWrapper>
        </>
      )}
    </Section>
  );
};
