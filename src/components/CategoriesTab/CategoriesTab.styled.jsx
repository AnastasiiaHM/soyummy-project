import { colors } from 'components/colors';
import Tab from '@mui/material/Tab';
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
