import React from 'react';
import LogoFooter from '../images/logo/logo 2.svg';
import { ImgLog } from './LogoFooter.styled';
import { Link } from 'react-router-dom';

export const Logo = () => {

  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <Link to="/main" onClick={uppPageHandler}>
      <ImgLog src={LogoFooter} alt="Logo" />
    </Link>
  );
};

