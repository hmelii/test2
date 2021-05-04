import { DEL_PUBLISHER_PAGE_SUCCESS, SET_PUBLISHER_PAGES } from '../types';

const initialState = {};

export const publisher = (state = initialState, action) => {
  switch (action.type) {
    case SET_PUBLISHER_PAGES:
      return {
        ...state,
        ...action.payload,
      };
    case DEL_PUBLISHER_PAGE_SUCCESS: {
      const {
        payload: { id },
      } = action;
      let findedNetworkID;
      Object.keys(state).forEach((key) => {
        if (state[key].find((item) => item.id === id)) {
          findedNetworkID = key;
        }
      });

      return {
        ...state,
        [findedNetworkID]: state[findedNetworkID].filter((item) => item.id !== id),
      };
    }
    default:
      return state;
  }
};
