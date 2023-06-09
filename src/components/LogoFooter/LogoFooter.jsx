import React from 'react';
import LogoFooter from '../images/logo/logo 2.svg';
import { ImgLog } from './LogoFooter.styled';

export const Logo = () => {
  return (
    <div>
      <ImgLog src={LogoFooter} alt="Logo" />
    </div>
  );
};
