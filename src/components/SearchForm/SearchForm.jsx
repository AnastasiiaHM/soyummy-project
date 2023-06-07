import {
  SearchBtn,
  SearchInput,
  SearchLabel,
  SearchedForm,
} from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <SearchedForm>
      <SearchLabel>
        <SearchInput
          type="search"
          placeholder="Search recipe..."
          name="searchTerm"
          id="searchBy"
          // value=""
          required
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchLabel>
    </SearchedForm>
  );
};
