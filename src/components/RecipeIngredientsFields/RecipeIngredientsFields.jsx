import shortid from 'shortid';
import { useState } from 'react';
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

export const RecipeIngredients = ({ list, zIndex }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  // const handleUserTyping = (e, index) => {
  //   setIsDropdownOpen(true);
  //   setCurrentIndex(index);
  //   const { value } = e.target;
  // };

  // const clearInputHandler = (e, index) => {
  //   setTimeout(() => {
  //     setSelectedIngredients(prevstate => {
  //       const list = [...prevstate];
  //       list[index] = '';
  //       return list;
  //     });
  //   }, 100);
  // };

  // const amountTypingHandler = (e, index) => {
  //   const { value } = e.target;
  //   setSelectedAmounts(prevstate => {
  //     const amounts = [...prevstate];
  //     amounts[index] = value;
  //     return amounts;
  //   });
  // };

  // const typingCompleteHandler = () => {
  //   setIsDropdownOpen(state => !state);
  // };

  // const ingredientSelectHandler = (e, name, index) => {
  //   e.preventDefault();
  //   const _id = e.target.value;
  //   setIngredients(prevstate => {
  //     const newIngredients = [...prevstate];
  //     newIngredients[index] = { _id };
  //     return newIngredients;
  //   });
  //   const searchedIndex = selectedIngredients.findIndex(item => item === name);
  //   if (index === -1) {
  //     setSelectedIngredients(prevState => [...prevState, name]);
  //   } else {
  //     setSelectedIngredients(prevState => {
  //       let newState = [...prevState];
  //       newState.splice(index, 1, name);
  //       return newState;
  //     });
  //   }
  //   setIsDropdownOpen(state => !state);
  // };

  // const ingredientAmountHandler = (e, index) => {
  //   const amount = e.target.value;
  //   setIngredients(prevstate => {
  //     const newIngredients = [...prevstate];
  //     newIngredients[index] = {
  //       ...newIngredients[index],
  //       measure: `${amount} ${selectedMeasure}`,
  //     };
  //     return newIngredients;
  //   });
  // };

  // const selectMeasureHandler = value => {
  //   setSelectedMeasure(value);
  // };

  const addIngredientHandler = value => {
    console.log(value);
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
        <List style={{ paddingBottom: isDropdownOpen ? '200px' : '100px' }}>
          {ingredients.map((ingredient, index) => (
            <AddSingleIngredient
              ingredient={ingredient}
              onClick={e => removeIngredientHandler(e, index)}
              index={index}
              selectedIngredient={addIngredientHandler}
            />
          ))}
        </List>
      )}
    </>
  );
};
