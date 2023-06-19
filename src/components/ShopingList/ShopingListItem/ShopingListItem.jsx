import { useDispatch } from 'react-redux';
import {
  ItemWraper,
  ProductImage,
  ImageContainer,
  ButtonContainer,
  Button,
  ProductName,
  CloseButton,
  MeasuresContainer,
} from './ShopingListItem.styled';
import { nanoid } from '@reduxjs/toolkit';

import { setDeleteProduct } from 'redux/shopping-list/operations';
import { Measures } from '../ShopingListItemMeasures/ShopingListItemMeasures';

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
        <MeasuresContainer>
          {measures?.map(e => (
            <Measures key={nanoid()} measures={measures} />
          ))}
        </MeasuresContainer>
        <Button type="button" onClick={handleDeleteProduct}>
          <CloseButton />
        </Button>
      </ButtonContainer>
    </ItemWraper>
  );
};
