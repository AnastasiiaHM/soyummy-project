import * as React from 'react';
import { BasicTabs } from './BasicTabs';
import {TabsWrapper, HeaderWrapper, UserIconWrapper} from './Header.styled'
import { BasicSwitches } from './Switch';
import { Logo } from 'components/Logo/Logo';
import { UserComponent } from './AuthUser';
import { useMediaQuery } from '@mui/material';
import {TemporaryDrawer} from '../MobileMenu/MobileMenu'


const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1439px)');

  return (
    <HeaderWrapper>
      <Logo />
      {!isMobile && <TabsWrapper>
        <BasicTabs />
      </TabsWrapper> }
      <UserIconWrapper>
        <UserComponent />
        {!isMobile && (
            <BasicSwitches />
        )}

        {isMobile && <TemporaryDrawer />}
       
      </UserIconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
