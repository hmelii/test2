import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../types';

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION,
  };
}

export function showNotification(message) {
  return {
    type: SHOW_NOTIFICATION,
    payload: message,
  };
  /* );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  }; */
}
