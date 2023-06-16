import React from 'react';
import LogoFooter from '../images/logo/logo 2.svg';
import { ImgLog } from './LogoFooter.styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/main">
      <ImgLog src={LogoFooter} alt="Logo" />
    </Link>
  );
};
