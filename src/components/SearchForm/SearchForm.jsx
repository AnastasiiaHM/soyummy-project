import { useState } from 'react';
import {
  SearchBtn,
  SearchInput,
  SearchLabel,
  SearchedForm,
} from './SearchForm.styled';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changeQuery } from 'redux/search/slice';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query === '') {
      toast.error(`Enter your query`, {
        position: 'top-center',
      });
      setSearchQuery();
    }

    setSearchQuery(query);
    dispatch(changeQuery(searchQuery));
    return navigate(`/search/title/${query}`);
  }
  return (
    <SearchedForm onSubmit={handleSubmit}>
      <SearchLabel>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchLabel>
    </SearchedForm>
  );
};
