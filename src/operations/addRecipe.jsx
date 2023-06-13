import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-back.onrender.com';

axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODYwNDkyMDgzNjc0ZTM4Y2JiZWU1YSIsImlhdCI6MTY4NjU5MzkwOSwiZXhwIjoxNjg5NDczOTA5fQ.byGm48HrksIWr711DkfmguTLmtF0x7hq2sIXyThw8ts';

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
