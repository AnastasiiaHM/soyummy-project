import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../images/addIngredient/arrow.svg';
import {
  Container,
  Field,
  Btn,
  DropDown,
  Item,
  OptionBtn,
} from './Select.styled';

export const Select = ({
  options,
  name,
  field,
  secondField,
  readOnly,
  width,
  alignText,
  newValue,
  top,
  open,
}) => {
  const isOptionObject = typeof options[0] === 'object' && options[0] !== null;
  const initialValue = isOptionObject ? options[0][secondField] : options[0];

  const [value, setValue] = useState(initialValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    const selectedValue = isOptionObject ? options[0][secondField] : options[0];
    setValue(selectedValue);
  }, [isOptionObject, options, secondField]);

  useEffect(() => {
    if (isDropdownOpen) {
      const selectedItemIndex = options.findIndex(
        item => item[secondField] === value || item === value
      );
      if (dropdownRef.current && itemRefs.current[selectedItemIndex]) {
        dropdownRef.current.scrollTop =
          itemRefs.current[selectedItemIndex].offsetTop -
          dropdownRef.current.offsetTop;
      }
    }
  }, [isDropdownOpen, options, value, secondField]);

  const clickHandler = (e, text) => {
    setValue(text);
    setIsDropdownOpen(state => !state);
    if (open) open(false);

    isOptionObject
      ? newValue({ [name]: e.target.value })
      : newValue(e.target.value);
  };

  const openDropdownHandler = () => {
    setIsDropdownOpen(state => !state);
    if (open) open(true);
  };

  return (
    <Container width={width}>
      <Field value={value || ''} name={name} readOnly={readOnly} />
      <Btn type="button" onClick={openDropdownHandler}>
        <Arrow />
      </Btn>
      {isDropdownOpen && (
        <DropDown ref={dropdownRef} top={top}>
          {options.map((option, index) => {
            const isOptionObject =
              typeof option === 'object' && option !== null;
            const data = isOptionObject ? option[field] : option;
            const text = isOptionObject ? option[secondField] : option;
            return (
              <Item key={text} ref={el => (itemRefs.current[index] = el)}>
                <OptionBtn
                  className={text === value ? 'active' : ''}
                  type="button"
                  value={data}
                  alignText={alignText}
                  onClick={e => clickHandler(e, text)}
                >
                  {text}
                </OptionBtn>
              </Item>
            );
          })}
        </DropDown>
      )}
    </Container>
  );
};
