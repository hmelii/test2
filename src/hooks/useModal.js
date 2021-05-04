import { useDispatch, useSelector } from 'react-redux';
import { modalShow as actionModalShow, modalHide as actionModalHide } from '../redux/actions/modal';

export const useModal = () => {
  const { modalType, modalProps } = useSelector(({ modal }) => modal);
  const dispatch = useDispatch();

  const modalShow = (type, props) => {
    const response = actionModalShow({ modalType: type, modalProps: props });
    dispatch(response);
  };

  const modalHide = () => {
    const response = actionModalHide();
    dispatch(response);
  };

  return { modalShow, modalHide, modalType, modalProps };
};
