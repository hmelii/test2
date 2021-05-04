import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { modal } from './modal';
import { publisher } from './publisher';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  modal,
  publisher,
  appReducer,
  form: formReducer,
});
