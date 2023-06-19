import axios from 'axios';

export const subscribe = async email => {
  const { data } = await axios.post('users/subscribe', { email });
  return data;
};
