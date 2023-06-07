import styled from '@emotion/styled';

export const Section = styled.section`
  width: 375px;
  max-width: 100%;
  padding-top: 50px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.div`
  margin-bottom: 50px;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8baa36;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  list-style: none;
  padding: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #fafafa;
`;

export const ListWraper = styled.div`
  display: flex;
  gap: 24px;
`;
