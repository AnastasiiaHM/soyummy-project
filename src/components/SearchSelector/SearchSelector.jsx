import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/slice';
import { useLocation } from 'react-router-dom';
import { SectionLabel, Wrapper, Options, Label } from './SearchSelector.styled';

const typesList = [{ searchType: 'title' }, { searchType: 'ingredients' }];

export const SearchSelector = () => {
  const location = useLocation();
  console.log(location.state);
  const [currentValue, setCurrentValue] = useState(
    location.state?.from || 'title'
  );
  console.log(currentValue);
  const dispatch = useDispatch();

  const changeType = e => {
    const type = e.target.value;
    setCurrentValue(type);
    dispatch(changeQueryType(type));
  };

  return (
    <Wrapper>
      <Label htmlFor="select">Search by:</Label>
      <SectionLabel
        name="select"
        value={currentValue}
        onChange={e => changeType(e)}
      >
        {typesList.map(({ searchType }) => (
          <Options key={searchType} value={searchType}>
            {searchType}
          </Options>
        ))}
      </SectionLabel>
    </Wrapper>
  );
};
