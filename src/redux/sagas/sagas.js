import { takeEvery, put, call } from 'redux-saga/effects';
import { DEL_PUBLISHER_PAGE, GET_PUBLISHER_PAGES, REFRESH_PUBLISHER_PAGE } from '../types';
import { hideLoader, showLoader } from '../actions/loader';
import { showNotification } from '../actions/notification';
import { publisherAPI } from '../../api/publisherAPI';

import {
  setPublisherPages,
  delPublisherPageSuccess,
  refreshPublisherPageSuccess,
} from '../actions/publisher';
import { modalHide } from '../actions/modal';

async function fetchPublisherPages(params = {}) {
  const { data } = await publisherAPI.getPages(params);
  return data;
}

async function delPublisherPage(params = {}) {
  const response = await publisherAPI.delPage(params);
  return response;
}

async function refreshPublisherPage(params = {}) {
  const response = await publisherAPI.getPage(params);
  return response;
}

function* publisherPagesWorker({ payload }) {
  try {
    yield put(showLoader());
    const response = yield call(() => fetchPublisherPages(payload));
    yield put(setPublisherPages(response));
    yield put(modalHide());
    yield put(showNotification('Информация об аккаунте обновлена'));
    yield put(hideLoader());
  } catch (e) {
    yield put(showNotification('Что-то пошло не так'));
    yield put(hideLoader());
  }
}

function* delPublisherPageWorker({ payload }) {
  try {
    yield put(showLoader());
    yield call(() => delPublisherPage(payload));
    yield put(delPublisherPageSuccess(payload));
    yield put(showNotification('Аккаунт успешно удален'));
    yield put(hideLoader());
  } catch (e) {
    yield put(showNotification('Что-то пошло не так'));
    yield put(hideLoader());
  }
}

function* refreshPublisherPageWorker({ payload }) {
  try {
    yield put(showLoader());
    yield call(() => refreshPublisherPage(payload));
    yield put(refreshPublisherPageSuccess(payload));
    yield put(showNotification('Аккаунт успешно добавлен'));
    yield put(hideLoader());
  } catch (e) {
    yield put(showNotification('Что-то пошло не так'));
    yield put(hideLoader());
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_PUBLISHER_PAGES, publisherPagesWorker);
  yield takeEvery(DEL_PUBLISHER_PAGE, delPublisherPageWorker);
  yield takeEvery(REFRESH_PUBLISHER_PAGE, refreshPublisherPageWorker);
}
