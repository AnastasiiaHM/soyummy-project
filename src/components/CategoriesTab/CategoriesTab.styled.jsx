import { colors } from 'components/colors';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledTab = styled(Tab)(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
  color: colors.categoriesNavText,
  '&:hover': {
    color: colors.greenButton,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: colors.greenButton,
  },
}));

export const StyledBox = styled(Box)(() => ({
  backgroundColor: 'background.inherit',
  paddingTop: '100px',
  borderBottom: `1px solid ${colors.categoriesLIne}`,
  '& .MuiTabs-indicator': {
    backgroundColor: colors.greenButton,
  },
  '& .MuiButtonBase-root': {
    padding: '10px 0 20px',
    marginRight: '20px',
  },
  '& .MuiTabScrollButton-root': {
    margin: 0,
  },
}));
