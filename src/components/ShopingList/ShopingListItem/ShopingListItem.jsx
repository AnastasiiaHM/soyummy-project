import plug from '../../images/заглушки/products/заглушка-products-small-green-1x.png';
import {
  ItemWraper,
  ProductImage,
  ImageContainer,
  ButtonContainer,
  Button,
  ProductWeight,
  ProductName,
} from './ShopingListItem.styled';

import { IoCloseSharp } from 'react-icons/io5';

export const ShoppingListItems = () => {
  return (
    <ItemWraper>
      <ImageContainer>
        <ProductImage height="60px" src={plug} alt="porduct name" />
        <ProductName>Salmon</ProductName>
      </ImageContainer>
      <ButtonContainer>
        <ProductWeight>5</ProductWeight>
        <Button type="button">
          <IoCloseSharp style={{ fill: '#333333' }} />
        </Button>
      </ButtonContainer>
    </ItemWraper>
  );
};
