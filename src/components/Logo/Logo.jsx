import { ReactComponent as LogoIcon } from 'images/logo.svg';
import { ReactComponent as MobileLogo } from 'images/mobileLogo.svg';
import { mediaSizes } from 'constants/media';
import { useEffect } from 'react';
import { useState } from 'react';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {
  const [mobileDevice, setMobileDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(mediaSizes.mobile)) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LinkStyled to="/">
      {!mobileDevice ? <LogoIcon /> : <MobileLogo />}
    </LinkStyled>
  );
};
