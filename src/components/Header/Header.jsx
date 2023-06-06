import {
  HeaderStyled,
  MenuButton,
  Icon,
  HeaderContainer,
} from './Header.styled';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { mediaSizes } from 'constants/media';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { Logo } from 'components/Logo/Logo';

const Header = () => {
  const [showBurgerIcon, setShowBurgerIcon] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserInfoShown, setUserInfoShown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isDesktop, setIsDesktop] = useState(false);

  const clickHandler = useCallback(() => {
    if (!isLoggedIn) return;
    setIsMobileMenuOpen(state => !state);
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      const height = isDesktop ? 100 : 40;
      const isTop = window.scrollY <= height;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(mediaSizes.desktop) && isLoggedIn) {
        setShowBurgerIcon(true);
      } else {
        setShowBurgerIcon(false);
      }
      if (window.innerWidth > parseInt(mediaSizes.mobile)) {
        setUserInfoShown(true);
      } else {
        setUserInfoShown(false);
      }
    };
    handleResize();

    setIsDesktop(window.innerWidth >= parseInt(mediaSizes.desktop));

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoggedIn]);

  return (
    <>
      <HeaderStyled
        className={`${isScrolled ? 'bg' : ''} ${!isLoggedIn ? 'guest' : ''}`}
      >
        <HeaderContainer>
          <Logo />
          {!showBurgerIcon && <Navigation />}
          {isLoggedIn && isUserInfoShown && <UserInfo />}
          {showBurgerIcon && (
            <MenuButton
              style={{ marginLeft: isUserInfoShown ? '51px' : 'auto' }}
              onClick={clickHandler}
            >
              {isMobileMenuOpen ? (
                <Icon>
                  <RiCloseLine />
                </Icon>
              ) : (
                <RiMenuFill width="18" height="12" />
              )}
            </MenuButton>
          )}
        </HeaderContainer>
        {!isUserInfoShown && <UserInfo />}
      </HeaderStyled>

      {isMobileMenuOpen && showBurgerIcon && (
        <MobileMenu handleClick={clickHandler} />
      )}
    </>
  );
};

export default Header;
