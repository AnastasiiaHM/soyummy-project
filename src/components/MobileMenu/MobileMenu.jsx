import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import NotesIcon from '@mui/icons-material/Notes';
import { colors } from '../colors'
import {Logo} from '../Logo/Logo'
import { BasicSwitches } from 'components/Header/Switch';
import { VerticalTabs } from './VerticalTabs'
import { BackgroundMob } from '../Background/MenuBgr'
import { HeaderWrapper, SwitchWrapper } from '../Header/Header.styled'
import CloseIcon from '@mui/icons-material/Close';


export function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div  style={{ backgroundColor: `${colors.imageBC}` }}>
      <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw' }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <div>
        <HeaderWrapper>
          <Logo />
          <CloseIcon />
          <SwitchWrapper>
            <BasicSwitches />
          </SwitchWrapper>
        </HeaderWrapper>
        <VerticalTabs />
        <BackgroundMob />
        </div>
      </Box>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <NotesIcon style={{ color: `${colors.blackFont}` }}/>
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        
      >
        {list('right')}
      </Drawer>
    </div>
  );
}