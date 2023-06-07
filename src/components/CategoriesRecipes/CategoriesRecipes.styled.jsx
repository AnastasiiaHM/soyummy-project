import styled from '@emotion/styled';

export const CategoriesNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  gap: 55px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #bdbdbd;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 110px;
  .navbat {
    border: none;
    background-color: inherit;
    padding-bottom: 25px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover,
    :active,
    :focus {
      color: #8baa36;
      border-bottom: 2px solid #8baa36;
    }
    &:current {
      border-bottom: #8baa36;
    }
  }
`;

export const CategoriesWrapper = styled.div`
  padding-bottom: 200px;
`;
