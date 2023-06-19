import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledTab = styled(Tab)((props) => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
  color: props.theme.placeholderText,
  '&:hover': {
    color: props.theme.constantGreenColor,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: props.theme.constantGreenColor,
  },
}));

export const StyledBox = styled(Box)((props) => ({
  backgroundColor: 'background.inherit',
  paddingTop: '100px',
  borderBottom: `1px solid ${props.theme.placeholderText}`,
  '& .MuiTabs-indicator': {
    backgroundColor: props.theme.constantGreenColor,
  },
  '& .MuiButtonBase-root': {
    padding: '10px 0 30px',
    marginRight: '28px',
  },
  '& .MuiTabScrollButton-root': {
    margin: 0,
  },
}));
