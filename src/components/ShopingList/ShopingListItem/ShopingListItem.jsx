import { useDispatch } from 'react-redux';
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
import { setDeleteProduct } from 'redux/shopping-list/operations';

export const ShoppingListItems = ({ image, id, measures, name }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => dispatch(setDeleteProduct(id));

  return (
    <ItemWraper key={id}>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
        <ProductName>{name}</ProductName>
      </ImageContainer>
      <ButtonContainer>
        <ProductWeight>{measures}</ProductWeight>
        <Button type="button" onClick={handleDeleteProduct}>
          <IoCloseSharp
            style={{ fill: '#333333', width: '100%', height: '100%' }}
          />
        </Button>
      </ButtonContainer>
    </ItemWraper>
  );
};
