import { useEffect, useState } from 'react';
import {
  SearchBtn,
  SearchInput,
  SearchLabel,
  SearchedForm,
} from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { changeItems, changeQuery } from 'redux/search/slice';

export const SearchForm = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const value = searchParam.get('query');
  const [searchQuery, setSearchQuery] = useState(value || '');

  const dispatch = useDispatch();

  const query = searchQuery.toLowerCase();

  function handleInputChange(e) {
    if (!e.target.value) {
      // dispatch(changeQuery(''));
      return;
    }
    setSearchQuery(e.target.value);
  }
  useEffect(() => {
    if (!value) {
      dispatch(changeQuery(''));
      dispatch(changeItems([]));
    }
    dispatch(changeQuery(value));
  }, [dispatch, value]);

  function handleSubmit(e) {
    e.preventDefault();
    if (query === '') {
      return;
    }
    setSearchParam({ query });
    if (!value) {
      setSearchQuery('');
      setSearchParam('');
      dispatch(changeItems([]));
    }
    dispatch(changeQuery(value));

    setSearchQuery(query);

    dispatch(changeQuery(searchQuery));
  }
  return (
    <SearchedForm onSubmit={handleSubmit}>
      <SearchLabel>
        <SearchInput
          type="text"
          value={searchQuery}
          autoComplete="off"
          minLength={2}
          autoFocus
          placeholder="Search.."
          title="Name may contain only letters, apostrophe, dash and spaces. For example beef, pork.."
          onChange={handleInputChange}
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchLabel>
    </SearchedForm>
  );
};
