import { SHOW_MODAL, HIDE_MODAL } from '../types';

const initialState = {
  modalType: null,
  modalProps: {},
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const {
        payload: { modalType, modalProps },
      } = action;
      return {
        ...state,
        modalType,
        modalProps,
      };
    }
    case HIDE_MODAL:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
