import { Wrapper, Label, SectionLabel, Options } from './SearchSelector.styled';
import { IoIosArrowDown } from 'react-icons/io';

export const SearchSelector = () => {
  return (
    <Wrapper>
      <Label htmlFor="searchBy">Search by:</Label>
      <SectionLabel
        name="searchBy"
        components={{ dropdownIndicator: () => <IoIosArrowDown /> }}
      >
        <Options value="title">Title</Options>
        <Options value="ingridients">Ingridients</Options>
      </SectionLabel>
    </Wrapper>
  );
};
