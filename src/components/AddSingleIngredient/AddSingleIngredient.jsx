import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  CloseBtn,
} from './AddSingleIngredient.styled';
import { setLoading } from 'redux/auth/slice';

export const AddSingleIngredient = ({
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

  const dispatch = useDispatch();
  const notify = message => toast.error(message, { autoClose: 3000 });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (query) {
  //         dispatch(setLoading(true));
  //         const res = await getIngredientNames(query);
  //         setIngredientsList([...res]);
  //         setIsDropdownOpen(true);
  //         dropDown(true);
  //         dispatch(setLoading(false));
  //       }
  //     } catch (error) {
  //       dispatch(setLoading(false));
  //       notify(error.message);
  //     }
  //   };

  //   fetchData();
  // }, [query, dispatch, dropDown, setIngredientsList]);

  // useEffect(() => {
  //   if (selectedIngredientId && (selectedAmount || selectedMeasure)) {
  //     selectedIngredient({
  //       id: selectedIngredientId,
  //       measure: `${selectedAmount} ${selectedMeasure}`,
  //     });
  //   }
  // }, [
  //   selectedIngredientId,
  //   selectedAmount,
  //   selectedMeasure,
  //   selectedIngredient,
  // ]);

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

    selectedIngredient({
      id: selectedIngredientId,
      measure: `${selectedAmount} ${selectedMeasure}`,
    });
  };

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
          value={selectedAmount || ''}
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
