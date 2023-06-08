import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { colors } from '../colors';

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
          backgroundColor: theme.palette.mode === 'dark' ? colors.greenButton : colors.forSwitch,
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
      backgroundColor: theme.palette.mode === 'dark' ? colors.forSwitch : colors.greenButton,
      boxSizing: 'border-box',
    },
  }));
  export function BasicSwitches() {
    const [isDarkMode, setIsDarkMode] = React.useState(
        localStorage.getItem('isDarkMode') === 'true'
    );

    const handleChange = () => {
        const newValue = !isDarkMode;
        setIsDarkMode(newValue);
        localStorage.setItem('isDarkMode', String(newValue));
    };

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch 
                checked={isDarkMode}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'ant design' }} 
            />
        </Stack> 
    );
}