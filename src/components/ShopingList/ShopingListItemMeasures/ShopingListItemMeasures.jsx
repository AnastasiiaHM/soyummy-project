import { ProductMeasures } from './ShopingListItemMeasures.styled';

export const Measures = ({ measures }) => {
  return (
    <>
      <ProductMeasures>{measures[0]}</ProductMeasures>
    </>
  );
};
