import { instance } from 'redux/auth/operations';

export const getCategoriesList = async () => {
  // setAuthHeader();
  const result = await instance.get(`/categories`);
  return result.data;
};
export const getPopularRecipes = async () => {
  // setAuthHeader();
  const result = await instance.get(`/recipes/popular-recipes`);
  return result.data;
};
export const getIngredientNames = async name => {
  // setAuthHeader();
  const result = await instance.get(`/ingredients/name?name=${name}`);
  return result.data;
};
export const addNewRecipe = async body => {
  // setAuthHeader();
  const result = await instance.post(`/recipes/add-new`, body);
  return result.data;
};
