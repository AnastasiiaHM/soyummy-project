// import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { LinkStyled } from './Link.styled';
import { NavigationStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <NavigationStyled>
      <li>
        <LinkStyled to="/login">log in</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/register">registration</LinkStyled>
      </li>
    </NavigationStyled>
  ) : (
    <NavigationStyled>
      <li>
        <LinkStyled to="/diary">diary</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/calculator">calculator</LinkStyled>
      </li>
    </NavigationStyled>
  );
};

export default Navigation;
