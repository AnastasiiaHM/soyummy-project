import { useState } from 'react';
import { ReactComponent as Arrow } from '../images/addIngredient/arrow.svg';
import {
  Container,
  Field,
  Btn,
  DropDown,
  Item,
  OptionBtn,
} from './Select.styled';

export const Select = ({ options }) => {
  const [value, setValue] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickHandler = e => {
    setValue(e.target.value);
    setIsDropdownOpen(state => !state);
  };

  const openDropdownHandler = () => {
    setIsDropdownOpen(state => !state);
  };

  return (
    <Container>
      <Field value={value} />
      <Btn type="button" onClick={openDropdownHandler}>
        <Arrow />
      </Btn>
      {isDropdownOpen && (
        <DropDown>
          {options.map(option => (
            <Item>
              <OptionBtn type="button" value={option} onClick={clickHandler}>
                {option}
              </OptionBtn>
            </Item>
          ))}
        </DropDown>
      )}
    </Container>
  );
};
