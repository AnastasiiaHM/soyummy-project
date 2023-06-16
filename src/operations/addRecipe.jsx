import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGMwOGFhNzU2ZGU5NmQyMWZkYTI3MSIsImlhdCI6MTY4Njg5OTMxNywiZXhwIjoxNjg5Nzc5MzE3fQ.UhAyOWmTYY9L856MxNgBGIIeCitvZqqYZKHL7Hn1ZME';

export const getCategoriesList = async () => {
  const result = await axios.get('/categories');
  return result.data;
};

export const getPopularRecipes = async () => {
  const result = await axios.get('/recipes/popular-recipes');
  return result.data;
};

export const getIngredientNames = async name => {
  const result = await axios.get(`/ingredients/name?name=${name}`);
  return result.data;
};

export const addNewRecipe = async body => {
  const result = await axios.post('/recipes/add-new', body);
  return result.data;
};
