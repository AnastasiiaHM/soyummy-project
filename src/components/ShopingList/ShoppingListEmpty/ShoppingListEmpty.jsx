import {
  EmptyDesc,
  EmptyImageWrapper,
  Wraper,
} from './ShoppingListEmpty.styled';

import notFoundMobX1 from '../../images/not-found/search-not-found-mob-1x.png';
import notFoundMobX2 from '../../images/not-found/search-not-found-mob-2x.png';

import notFoundTabX1 from '../../images/not-found/search-not-found-tb-1x.png';
import notFoundTabX2 from '../../images/not-found/search-not-found-tb-2x.png';

import notFoundDescX1 from '../../images/not-found/searchNotFound1x.png';
import notFoundDescX2 from '../../images/not-found/search-not-found-desc-2x.png';

export const ShoppingListEmpty = ({ message }) => {
  return (
    <Wraper>
      <EmptyImageWrapper>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${notFoundMobX1} 1x, ${notFoundMobX2} 2x`}
          />
          <source
            media="(min-width: 768px) and (max-width: 1439px)"
            srcSet={`${notFoundTabX1} 1x, ${notFoundTabX2} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${notFoundDescX1} 1x, ${notFoundDescX2} 2x`}
          />
          <img src={notFoundDescX1} alt="not found product" />
        </picture>
      </EmptyImageWrapper>
      <EmptyDesc>{message}</EmptyDesc>
    </Wraper>
  );
};
