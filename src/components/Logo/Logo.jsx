import React from 'react';
import LogoImage from '../images/logo/logo.svg'
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div>
      <Link to="/main">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </div>
  );
};