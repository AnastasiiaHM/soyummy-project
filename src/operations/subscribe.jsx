import axios from 'axios';

export const subscribe = async email => {
  const { data } = await axios.patch('users/subscribe', { email });
  return data;
};
