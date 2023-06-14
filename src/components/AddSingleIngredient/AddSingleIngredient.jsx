import { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../images/addIngredient/close.svg';
import { Select } from 'components/Select/Select';
import { getIngredientNames } from 'operations/addRecipe';
import { measures } from 'components/constants/measures';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export const AddSingleIngredient = ({
  onClick,
  index,
  selectedIngredient,
  dropDown,
}) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState('');
  const [selectedIngredientName, setSelectedIngredientName] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const notify = message => toast.error(message, { autoClose: 3000 });

  const nameTypingHandler = async e => {
    try {
      const { value } = e.target;
      setSelectedIngredientName(value);
      const res = await getIngredientNames(value);
      setIngredientsList(res);
      setIsDropdownOpen(true);
      dropDown(true);
    } catch (error) {
      notify(error.message);
    }
  };

  const ingredientSelectHandler = (e, name) => {
    e.preventDefault();
    setSelectedIngredientName(name);
    setSelectedIngredientId(e.target.value);
    setIsDropdownOpen(false);
    dropDown(false);

    selectedIngredient({
      id: e.target.value,
      measure: `${selectedAmount} ${selectedMeasure}`,
    });
  };

  const amountTypingHandler = e => {
    setSelectedAmount(e.target.value);

    selectedIngredient({
      id: selectedIngredientId,
      measure: `${e.target.value} ${selectedMeasure}`,
    });
  };

  const selectMeasureHandler = value => {
    setSelectedMeasure(value);

    selectedIngredient({
      id: selectedIngredientId,
      measure: `${selectedAmount} ${value}`,
    });
  };

  const dropdownHandler = value => {
    dropDown(value);
  };

  return (
    <>
      <ToastContainer />
      <Item>
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
                  <IngredientBtn
                    value={_id}
                    onClick={e => ingredientSelectHandler(e, name)}
                  >
                    {name}
                  </IngredientBtn>
                </DropdownItem>
              ))}
            </DropDown>
          )}
        </NameLabel>
        <StyledLabel style={{ zIndex: 100 - index }}>
          <Input
            type="number"
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
            readOnly={true}
            open={dropdownHandler}
          />
        </StyledLabel>
        <CloseBtn type="button" onClick={onClick}>
          <Close />
        </CloseBtn>
      </Item>
    </>
  );
};
