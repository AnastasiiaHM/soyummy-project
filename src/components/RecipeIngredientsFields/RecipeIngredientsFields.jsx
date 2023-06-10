import shortid from 'shortid';
import { useState } from 'react';
import { ReactComponent as Plus } from '../images/addIngredient/Plus.svg';
import { ReactComponent as Minus } from '../images/addIngredient/Minus.svg';
import { ReactComponent as Close } from '../images/addIngredient/close.svg';
import { Select } from 'components/Select/Select';
import {
  Wrapper,
  Title,
  Counter,
  CounterButton,
  List,
  Item,
  Input,
  CloseBtn,
  StyledLabel,
} from './RecipeIngredientsFields.styled';

const measures = ['tbs', 'tsp', 'kg', 'g'];

export const RecipeIngredients = ({ list, zIndex }) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHadler = e => {
    e.preventDefault();
    setIngredients(prevState => [...prevState, {}]);
  };

  const removeLastIngredientHadler = e => {
    e.preventDefault();
    setIngredients(ingredients.slice(0, -1));
  };

  const removeIngredientHandler = (e, index) => {
    e.preventDefault();
    setIngredients(prevIngredients =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Wrapper>
        <Title>Ingredients</Title>
        <Counter>
          <CounterButton type="button" onClick={removeLastIngredientHadler}>
            <Minus />
          </CounterButton>
          {ingredients.length}
          <CounterButton type="button" onClick={addIngredientHadler}>
            <Plus />
          </CounterButton>
        </Counter>
      </Wrapper>
      <List>
        {ingredients.map((ingredient, index) => (
          <Item key={shortid.generate()}>
            <Input type="text" required />
            <StyledLabel style={{ zIndex: 100 - index }}>
              <Input type="text" width="100%" required />
              <Select
                options={measures}
                alignText="center"
                top="160%"
                width="100%"
                readOnly
              />
            </StyledLabel>
            <CloseBtn
              type="button"
              onClick={e => removeIngredientHandler(e, index)}
            >
              <Close />
            </CloseBtn>
          </Item>
        ))}
      </List>
    </>
  );
};
