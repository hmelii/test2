import { useDispatch, useSelector } from 'react-redux';
import { hideNotification as actionHideNotification } from '../redux/actions/notification';

export const useNotification = () => {
  const { notification } = useSelector(({ appReducer }) => appReducer);
  const dispatch = useDispatch();

  const hideNotification = () => {
    const response = actionHideNotification();
    dispatch(response);
  };
  return { notification, hideNotification };
};
