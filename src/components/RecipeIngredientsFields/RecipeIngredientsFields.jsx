import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Plus } from '../images/addIngredient/Plus.svg';
import { ReactComponent as Minus } from '../images/addIngredient/Minus.svg';
import { ReactComponent as Close } from '../images/addIngredient/close.svg';
import { AddSingleIngredient } from 'components/AddSingleIngredient/AddSingleIngredient';
import {
  Wrapper,
  Title,
  Counter,
  CounterButton,
  List,
  Item,
  CloseBtn,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredients = ({ setParentIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setParentIngredients(ingredients);
  }, [ingredients, setParentIngredients]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight + 200;
    }
  }, [ingredients]);

  const addNewIngredientHadler = e => {
    e.preventDefault();
    const newIngredient = {
      keyId: nanoid(),
    };
    setIngredients(prevState => [...prevState, newIngredient]);
  };

  const removeLastIngredientHadler = e => {
    e.preventDefault();
    setIngredients(ingredients.slice(0, -1));
  };

  const removeIngredientHandler = (e, index) => {
    e.preventDefault();
    setIngredients(prevIngredients => {
      const updatedIngredients = prevIngredients.filter((_, i) => i !== index);
      return updatedIngredients;
    });
  };

  const addIngredientHandler = (value, index) => {
    console.log(value);
    setIngredients(prevState => {
      const list = [...prevState];
      list[index] = value;
      return list;
    });
  };

  const dropdownHandler = value => {
    setIsAnyDropdownOpen(value);
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
          <CounterButton type="button" onClick={addNewIngredientHadler}>
            <Plus />
          </CounterButton>
        </Counter>
      </Wrapper>
      {ingredients.length > 0 && (
        <List
          style={{ paddingBottom: isAnyDropdownOpen ? '200px' : '10px' }}
          ref={listRef}
        >
          {ingredients.map((ingredient, index) => (
            <Item key={index}>
              <AddSingleIngredient
                dropDown={dropdownHandler}
                index={index}
                selectedIngredient={value => addIngredientHandler(value, index)}
              />
              <CloseBtn
                type="button"
                onClick={e => removeIngredientHandler(e, index)}
              >
                <Close />
              </CloseBtn>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
