import shortid from 'shortid';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Plus } from '../images/addIngredient/Plus.svg';
import { ReactComponent as Minus } from '../images/addIngredient/Minus.svg';
import { AddSingleIngredient } from 'components/AddSingleIngredient/AddSingleIngredient';
import {
  Wrapper,
  Title,
  Counter,
  CounterButton,
  List,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredients = ({ list, zIndex, setParentIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isAnyDropdownOpen, setAnyDropdownOpen] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setParentIngredients(ingredients);
  }, [ingredients, setParentIngredients]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight + 200;
    }
  }, [ingredients]);

  const addIngredientHadler = e => {
    e.preventDefault();
    setIngredients(prevState => [...prevState, { keyId: shortid.generate() }]);
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

  const addIngredientHandler = (value, index) => {
    setIngredients(prevState => {
      const list = [...prevState];
      list[index] = value;
      return list;
    });
  };

  const dropdownHandler = value => {
    setAnyDropdownOpen(value);
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
          <CounterButton
            type="button"
            onClick={addIngredientHadler}
            disabled={
              ingredients.length > 0 && Object.keys(ingredients[0]).length === 0
                ? true
                : false
            }
          >
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
            <AddSingleIngredient
              dropDown={dropdownHandler}
              key={ingredient.keyId}
              onClick={e => removeIngredientHandler(e, index)}
              index={index}
              selectedIngredient={value => addIngredientHandler(value, index)}
            />
          ))}
        </List>
      )}
    </>
  );
};
