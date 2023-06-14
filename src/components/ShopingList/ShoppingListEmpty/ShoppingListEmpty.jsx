import { EmptyDesc, EmptyImage, Wraper } from './ShoppingListEmpty.styled';

import notFound from '../../images/not-found/search-not-found-desc-2x.png';

export const ShoppingListEmpty = () => {
  return (
    <Wraper>
      <EmptyImage src={notFound} alt="not found product" />
      <EmptyDesc>The product list is empty</EmptyDesc>
    </Wraper>
  );
};
