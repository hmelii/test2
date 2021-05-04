import { HIDE_MODAL, SHOW_MODAL } from '../types';

export const modalShow = (props) => ({ type: SHOW_MODAL, payload: props });

export const modalHide = (props) => ({ type: HIDE_MODAL, payload: props });
