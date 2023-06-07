import { ShoppingListItems } from './ShopingListItem/ShopingListItem';

import { Section, Title, List, ListWraper } from './ShopingList.styled';

export const ShoppingListComponent = () => {
  return (
    <Section>
      <Title className="title">Shopping list</Title>
      <List>
        <li>Product</li>
        <ListWraper>
          <li>Number</li>
          <li>Remove</li>
        </ListWraper>
      </List>
      <ShoppingListItems />
      <ShoppingListItems />
      <ShoppingListItems />
      <ShoppingListItems />
      <ShoppingListItems />
    </Section>
  );
};
