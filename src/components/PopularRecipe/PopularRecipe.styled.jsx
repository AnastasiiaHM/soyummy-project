import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px 0 16px;
`;

export const StyledTitle = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #3e4462;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 12px;
  padding: 13px 0;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 12px;
`;

export const StyledImage = styled.img`
  display: block;
  border-radius: 8px;
  width: 104px;
  height: 85px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RecipeTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: #3e4462;
`;

export const StyledDesc = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #7e7e7e;
`;
