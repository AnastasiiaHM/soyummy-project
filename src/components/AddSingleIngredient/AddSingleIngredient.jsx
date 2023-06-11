import { Select } from 'components/Select/Select';
import { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../images/addIngredient/close.svg';
import {
  Item,
  NameLabel,
  Input,
  DropDown,
  DropdownItem,
  IngredientBtn,
  StyledLabel,
  CloseBtn,
} from './AddSingleIngredient.styled';

const measures = ['tbs', 'tsp', 'kg', 'g'];
const ddf = [
  { _id: '8ui354h3j', name: 'chicken' },
  { _id: '8ui354h3jturut', name: 'apple' },
  { _id: '8ui35sfdgffh3j', name: 'banana' },
  { _id: '8ui354gfgh3j', name: 'yogurt' },
  { _id: '8ui354sfdgsgh3j', name: 'butter' },
  { _id: '8uttyjukh3j', name: 'milk' },
  { _id: '8uttyjsghgj3j', name: 'colas' },
];

export const AddSingleIngredient = ({
  ingredient,
  onClick,
  index,
  selectedIngredient,
}) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState('');
  const [selectedIngredientName, setSelectedIngredientName] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [ingredientsList, setIngredientsList] = useState(ddf);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    selectedIngredient({
      _id: selectedIngredientId,
      measure: `${selectedAmount} ${selectedMeasure}`,
    });
  }, [
    selectedIngredient,
    selectedIngredientId,
    selectedAmount,
    selectedMeasure,
  ]);

  const nameTypingHandler = e => {
    const value = e.target.value;
    setSelectedIngredientName(value);
    setIsDropdownOpen(true);
  };

  const ingredientSelectHandler = e => {
    e.preventDefault();
    console.log('e.target.value: ', e.target.value);
    setSelectedIngredientName(e.target.textContent);
    setSelectedIngredientId(e.target.value);
    setIsDropdownOpen(false);
  };

  const amountTypingHandler = e => {
    setSelectedAmount(e.target.value);
  };

  const selectMeasureHandler = value => {
    setSelectedMeasure(value);
  };

  return (
    <Item key={ingredient.keyId}>
      <NameLabel style={{ zIndex: 100 - index }}>
        <Input
          type="text"
          onChange={nameTypingHandler}
          style={{ textAlign: 'left' }}
          value={selectedIngredientName}
          required
        />
        {ingredientsList.length > 0 && isDropdownOpen && (
          <DropDown>
            {ingredientsList.map(({ _id, name }) => (
              <DropdownItem key={_id}>
                {ingredientsList.length > 0 ? (
                  <IngredientBtn value={_id} onClick={ingredientSelectHandler}>
                    {name}
                  </IngredientBtn>
                ) : (
                  <span>Not found</span>
                )}
              </DropdownItem>
            ))}
          </DropDown>
        )}
      </NameLabel>
      <StyledLabel style={{ zIndex: 100 - index }}>
        <Input
          type="text"
          width="100%"
          required
          onChange={amountTypingHandler}
          value={selectedAmount}
        />
        <Select
          options={measures}
          alignText="center"
          top="160%"
          width="100%"
          newValue={selectMeasureHandler}
          readOnly
        />
      </StyledLabel>
      <CloseBtn type="button" onClick={onClick}>
        <Close />
      </CloseBtn>
    </Item>
  );
};
