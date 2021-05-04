import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mock = new MockAdapter(axios, { delayResponse: 2000 });

export const get = async ({ url, params = {} }) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    return error.response;
  }
};

export const del = async ({ url }) => {
  try {
    return await axios.delete(url);
  } catch (error) {
    return error.response;
  }
};
