import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';
import { NavLink } from 'react-router-dom';

export const StyledTitle = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.titleCategories};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 98px;
    overflow: hidden;
    flex-direction: row;
    gap: 45px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    height: auto;
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledItem = styled.li`
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: calc((100% - 45px) / 2);
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  width: 100%;
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
  color: ${props => props.theme.titleCategories};
`;

export const StyledDesc = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.descriptionCard};
`;
