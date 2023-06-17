import { useState } from 'react';
import {
  SearchBtn,
  SearchInput,
  SearchLabel,
  SearchedForm,
} from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changeQuery } from 'redux/search/slice';

export const SearchForm = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const value = searchParam.get('query');
  const [searchQuery, setSearchQuery] = useState(value || '');

  const dispatch = useDispatch();

  const query = searchQuery.toLowerCase();

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParam({ query });
    if (!value) return;
    dispatch(changeQuery(value));
    if (query === '') {
      toast.error(`Enter your query`, {
        position: 'top-center',
      });
      setSearchQuery();
    }

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
          // pattern="^[a-zA-Zа-яА-Я]+([-' ][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example beef, pork.."
          onChange={handleInputChange}
        />

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchLabel>
    </SearchedForm>
  );
};
