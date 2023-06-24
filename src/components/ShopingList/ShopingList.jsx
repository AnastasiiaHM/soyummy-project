import { ShoppingListItems } from './ShopingListItem/ShopingListItem';
import { fetchShoppingList } from 'redux/shopping-list/operations';
import { ShoppingListEmpty } from './ShoppingListEmpty/ShoppingListEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Title } from './../Styled/Shared.styled';
import {
  Section,
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
      <Title>Shopping list</Title>

      {shoppingList.length === 0 ? (
        <ShoppingListEmpty message={'The product list is empty'} />
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
            {shoppingList?.map(({ image, ingredientId, measures, name }) => (
              <ShoppingListItems
                key={ingredientId}
                id={ingredientId}
                image={image}
                measures={measures}
                name={name}
              ></ShoppingListItems>
            ))}
          </ItemsWrapper>
        </>
      )}
    </Section>
  );
};
