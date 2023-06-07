import {
  Wrapper,
  Title,
  Counter,
  CounterButton,
  List,
  Item,
  Input,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredients = ({ list }) => {
  return (
    <>
      <Wrapper>
        <Title>Ingredients</Title>
        <Counter>
          <CounterButton>—</CounterButton>3<CounterButton>+</CounterButton>
        </Counter>
      </Wrapper>
      {/* <List>
        {list.map(ingredient => <Item></Item>)}
        <Input type="text" required />
        <Input type="text" required width="84px" />
      </List> */}
    </>
  );
};
