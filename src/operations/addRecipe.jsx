import axios from 'axios';
axios.defaults.baseURL = ' https://soyummy-back.onrender.com';
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
  const result = await axios.get(`/categories`);
  return result.data;
};
export const getPopularRecipes = async () => {
  // setAuthHeader();
  const result = await axios.get(`/recipes/popular-recipes`);
  return result.data;
};
export const getIngredientNames = async name => {
  // setAuthHeader();
  const result = await axios.get(`/ingredients/name?name=${name}`);
  return result.data;
};
export const addNewRecipe = async body => {
  // setAuthHeader();
  const result = await axios.post(`/recipes/add-new`, body);
  return result.data;
};
