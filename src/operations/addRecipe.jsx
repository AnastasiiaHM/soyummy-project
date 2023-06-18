// import axios from 'axios';
import { instance } from 'redux/auth/operations';
instance.defaults.baseURL = ' https://soyummy-back.onrender.com';
// const setAuthHeader = token => {
//   if (token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   } else {
//     const storedToken = localStorage.getItem(`token`);
//     if (storedToken) {
//       axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
//     } else {
//       delete axios.defaults.headers.common.Authorization;
//     }
//   }
// };
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
