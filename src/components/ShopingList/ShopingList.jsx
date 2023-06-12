import { ShoppingListItems } from './ShopingListItem/ShopingListItem';
import { fetchShoppingList } from 'redux/shopping-list/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectShoppingList,
  selectIsLoading,
} from 'redux/shopping-list/selectors';

import {
  Section,
  Title,
  List,
  ListWraper,
  ItemsWrapper,
} from './ShopingList.styled';
import { Loader } from 'components/Loader/Loader';

export const ShoppingListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section>
      <Title className="title">Shopping list</Title>
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
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100px',
            }}
          >
            <Loader />
          </div>
        ) : (
          shoppingList?.map(({ image, ingredientId, measure, name }) => (
            <ShoppingListItems
              key={ingredientId}
              id={ingredientId}
              image={image}
              measure={measure}
              name={name}
            ></ShoppingListItems>
          ))
        )}
      </ItemsWrapper>
    </Section>
  );
};
