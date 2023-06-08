import { ShoppingListItems } from './ShopingListItem/ShopingListItem';

import {
  Section,
  Title,
  List,
  ListWraper,
  ItemsWrapper,
} from './ShopingList.styled';

export const ShoppingListComponent = () => {
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
        <ShoppingListItems />
        <ShoppingListItems />
        <ShoppingListItems />
        <ShoppingListItems />
        <ShoppingListItems />
      </ItemsWrapper>
    </Section>
  );
};
