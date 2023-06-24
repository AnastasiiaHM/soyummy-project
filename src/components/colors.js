import { unstable_createMuiStrictModeTheme } from "@mui/material";

const themeMUI = unstable_createMuiStrictModeTheme();

export const lightTheme = {
  ...themeMUI,
  headerNavText: '#23262A', //нав.хед, ред.проф, текст.герой, 
  userNameText: '#22252A',
  logoNameText: '#22252A', // кнопка other categories. текст під футером, //userName for other page
  darkButtonBackground: '#22252A', //кнопки, футер-фон,
  greenButtonBackground: '#8BAA36',
  placeholderText: '#BDBDBD', // page categories h3
  buttonText: '#FAFAFA',
  bordercolor: '#F0F0F0',
  textPrimaryDark: '#3E4462',
  constantGreenColor: '#8BAA36', //border other categories. активні сторінки
  constWhiteColor: '#FAFAFA',
  constDarkColor: '#23262A',
  constGreyColor: '#D9D9D9',
  constRedColor: '#E74A3B',
  titleCategories: '#001833',
  socialIconBackground: '#8BAA36',
  labelText: 'rgba(0, 0, 0, 0.5)',
  placeholderAddRecipes: 'rgba(0, 0, 0, 0.5)',
  inputBackground: '#D9D9D9', //page add recipes
  inputBackgroundSemitransparent: '#D9D9D9', //page add recipes
  bodyBackground: '#FAFAFA', // edit profile
  textBackground: '#FAFAFA',
  dropdownBackground: '#FFFFFF',
  descriptionCard: '#23262A',
  ingredientsBackgroundCard: '#EBF3D4',
  recipesBackgroundCard: '#FFFFFF',
  deleteBackgroundBtn: '#EBF3D4', //mobile menu
  productBackground: '#EBF3D4',
  switchBackground: '#EFEFEF',
  isDark: false
};

export const darkTheme = {
  ...themeMUI,
  headerNavText: '#FAFAFA',
  userNameText: '#FAFAFA',
  logoNameText: '#FAFAFA', 
  darkButtonBackground: '#8BAA36;',
  greenButtonBackground: '#22252A',
  placeholderText: 'rgba(250, 250, 250, 0.5)',
  buttonText: '#FAFAFA',
  bordercolor: 'rgba(250, 250, 250, 0.5)',
  textPrimaryDark: '#FAFAFA',
  constantGreenColor: '#8BAA36',
  constWhiteColor: '#FAFAFA',
  constGreyColor: '#D9D9D9',
  constDarkColor: '#23262A',
  constRedColor: '#E74A3B',
  titleCategories: '#FAFAFA',
  socialIconBackground: '#FAFAFA',
  labelText: '#FAFAFA',
  placeholderAddRecipes: 'rgba(250, 250, 250, 0.5)',
  inputBackground: '#1E1F28',
  inputBackgroundSemitransparent: '#1E1F28', //page add recipes
  bodyBackground: '#1E1F28',
  textBackground: '#2A2C36',
  dropdownBackground: '#8BAA36',
  descriptionCard: 'rgba(250, 250, 250, 0.6)',
  ingredientsBackgroundCard: '#2A2C36',
  recipesBackgroundCard: '#2A2C36',
  deleteBackgroundBtn: '#1E1F28',
  productBackground: '#2A2C36',
  switchBackground: '#8BAA36',
  isDark: true
};