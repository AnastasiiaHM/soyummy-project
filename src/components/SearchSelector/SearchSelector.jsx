// import { Wrapper, Label, SectionLabel, Options } from './SearchSelector.styled';
import { IoIosArrowDown } from 'react-icons/io';

// export const SearchSelector = () => {
//   return (
//     <Wrapper>
//       <Label htmlFor="searchBy">Search by:</Label>
//       <SectionLabel
//         name="searchBy"
//         components={{ dropdownIndicator: () => <IoIosArrowDown /> }}
//       >
//         <Options value="title">Title</Options>
//         <Options value="ingridients">Ingridients</Options>
//       </SectionLabel>
//     </Wrapper>
//   );
// };
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TitleDropdpwn, DropdownWrapper } from './SearchSelector.styled';
import { useState } from 'react';

export const SearchSelector = () => {
  const [searchType, setSearchType] = useState('title');

  const handleSearchTypeChange = event => {
    setSearchType(event.target.value);
  };
  return (
    <DropdownWrapper>
      <TitleDropdpwn>Search by:</TitleDropdpwn>

      <Select
        sx={{
          color: 'rgb(189, 189, 189);',
          backgroundColor: '#D9D9D9;',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(217, 217, 217, 0.2)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `rgba(217, 217, 217, 0.2)`,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(217, 217, 217, 0.2)',
          },

          width: '198px',
        }}
        value={searchType}
        onChange={handleSearchTypeChange}
        components={{ dropdownIndicator: () => <IoIosArrowDown /> }}
      >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="ingredient">Ingredient</MenuItem>
      </Select>
    </DropdownWrapper>
  );
};
