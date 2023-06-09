import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/theme/slice';
import { styled } from '@mui/material';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 17,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === 'dark' ? props => props.theme.constantGreenColor : props => props.theme.constWhiteColor,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? props => props.theme.constWhiteColor : props => props.theme.constantGreenColor,
    boxSizing: 'border-box',
  },
}));

export function BasicSwitches() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <AntSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'ant design' }}
      />
    </Stack>
  );
}
