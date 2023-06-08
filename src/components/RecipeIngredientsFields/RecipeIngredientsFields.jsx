import {
  Wrapper,
  Title,
  Counter,
  CounterButton,
  List,
  Item,
  Input,
  CloseBtn,
} from './RecipeIngredientsFields.styled';
import { ReactComponent as Plus } from '../images/addIngredient/Plus.svg';
import { ReactComponent as Minus } from '../images/addIngredient/Minus.svg';
import { ReactComponent as Close } from '../images/addIngredient/close.svg';

export const RecipeIngredients = ({ list }) => {
  return (
    <>
      <Wrapper>
        <Title>Ingredients</Title>
        <Counter>
          <CounterButton>
            <Minus />
          </CounterButton>
          3
          <CounterButton>
            <Plus />
          </CounterButton>
        </Counter>
      </Wrapper>
      <List>
        <Item>
          <Input type="text" required />
          <Input type="text" required width="30%" />
          <CloseBtn>
            <Close />
          </CloseBtn>
        </Item>
      </List>
    </>
  );
};
