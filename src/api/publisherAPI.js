import config from './config';
import { get, del, mock } from './fetch';

const {
  API_URL,
  PUBLISHER_PAGES_URL,
  PUBLISHER_PAGES_ITEM_DELETE_URL,
  PUBLISHER_PAGES_ITEM_REFRESH_URL,
} = config;

mock.onGet(`${API_URL}${PUBLISHER_PAGES_URL}`).reply(200, require('./pages.json'));

const getPages = (params) => get({ url: `${API_URL}${PUBLISHER_PAGES_URL}`, params });

mock.onDelete(new RegExp(`${API_URL}${PUBLISHER_PAGES_URL}/*`)).reply(200, { message: 'ok' });

const delPage = (params) =>
  del({ url: `${API_URL}${PUBLISHER_PAGES_ITEM_DELETE_URL.replace('{id}', params.id)}` });

mock
  .onGet(new RegExp(`${API_URL}${PUBLISHER_PAGES_URL}/?.*/refresh`))
  .reply(200, { message: 'ok' });

const getPage = (params) =>
  get({ url: `${API_URL}${PUBLISHER_PAGES_ITEM_REFRESH_URL.replace('{id}', params.id)}` });

export const publisherAPI = {
  getPages,
  getPage,
  delPage,
};
