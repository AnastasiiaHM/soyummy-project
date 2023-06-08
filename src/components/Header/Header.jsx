import * as React from 'react';
import { BasicTabs } from './BasicTabs';
import {TabsWrapper, HeaderWrapper} from './Header.styled'
import { BasicSwitches } from './Switch';
import { Logo } from 'components/Logo/Logo';
import { UserComponent } from './AuthUser';

const Header = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const height = isDesktop ? 100 : 40;
  //     const isTop = window.scrollY <= height;
  //     setIsScrolled(!isTop);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [isDesktop]);

  return (
    <HeaderWrapper>
      <Logo />
      <TabsWrapper>
        <BasicTabs />
      </TabsWrapper>
      <UserComponent />
      <BasicSwitches />
    </HeaderWrapper>
  );
};

export default Header;
