import {
  GET_PUBLISHER_PAGES,
  SET_PUBLISHER_PAGES,
  DEL_PUBLISHER_PAGE,
  DEL_PUBLISHER_PAGE_SUCCESS,
  REFRESH_PUBLISHER_PAGE,
  REFRESH_PUBLISHER_PAGE_SUCCESS,
} from '../types';

export const getPublisherPages = (props) => ({ type: GET_PUBLISHER_PAGES, payload: props });

export const setPublisherPages = (props) => ({ type: SET_PUBLISHER_PAGES, payload: props });

export const delPublisherPage = (props) => ({ type: DEL_PUBLISHER_PAGE, payload: props });

export const delPublisherPageSuccess = (props) => ({
  type: DEL_PUBLISHER_PAGE_SUCCESS,
  payload: props,
});

export const refreshPublisherPage = (props) => ({ type: REFRESH_PUBLISHER_PAGE, payload: props });
export const refreshPublisherPageSuccess = (props) => ({
  type: REFRESH_PUBLISHER_PAGE_SUCCESS,
  payload: props,
});
