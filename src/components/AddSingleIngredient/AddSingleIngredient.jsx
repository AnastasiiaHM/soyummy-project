import { useState } from 'react';
import { Select } from 'components/Select/Select';
import { getIngredientNames } from 'operations/addRecipe';
import { measures } from 'components/constants/measures';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  NameLabel,
  Input,
  DropDown,
  DropdownItem,
  IngredientBtn,
  StyledLabel,
} from './AddSingleIngredient.styled';

export const AddSingleIngredient = ({
  index,
  selectedIngredient,
  dropDown,
}) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState('');
  const [selectedIngredientName, setSelectedIngredientName] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedMeasure, setSelectedMeasure] = useState('tbs');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const notify = message => toast.error(message, { autoClose: 3000 });

  const nameTypingHandler = async e => {
    try {
      const { value } = e.target;
      setSelectedIngredientName(value);
      const res = await getIngredientNames(value);
      setIngredientsList([...res]);
      setIsDropdownOpen(true);
      dropDown(true);
    } catch (error) {
      notify(error.message);
    }
  };

  const ingredientSelectHandler = (e, _id, name) => {
    e.preventDefault();
    setSelectedIngredientName(name);
    setSelectedIngredientId(_id);
    setIsDropdownOpen(false);
    dropDown(false);

    selectedIngredient({
      id: selectedIngredientId,
      measure: `${selectedAmount} ${selectedMeasure}`,
    });
  };

  const amountTypingHandler = e => {
    setSelectedAmount(e.target.value);

    selectedIngredient({
      id: selectedIngredientId,
      measure: `${selectedAmount} ${selectedMeasure}`,
    });
  };

  const selectMeasureHandler = value => {
    setSelectedMeasure(value);
  };
  // useEffect(() => {
  //   selectedIngredient({
  //     id: selectedIngredientId,
  //     measure: `${selectedAmount} ${selectedMeasure}`,
  //   });
  // }, [selectedAmount, selectedMeasure, selectedIngredientId]);

  const dropdownHandler = value => {
    dropDown(value);
  };

  return (
    <>
      <ToastContainer />
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
                  type="button"
                  value={_id}
                  onClick={e => ingredientSelectHandler(e, _id, name)}
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
          type="text"
          width="100%"
          required
          onChange={amountTypingHandler}
          value={selectedAmount}
          pattern="[0-9]*"
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
    </>
  );
};
