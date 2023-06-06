import styled from '@emotion/styled';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';

export const LinkStyled = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${colors.color2};
  ${transition('opacity')};

  &:hover {
    opacity: 0.6;
  }

  &.active {
    color: ${colors.color4};
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;
