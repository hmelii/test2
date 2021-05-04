import { useDispatch, useSelector } from 'react-redux';
import {
  getPublisherPages as actionGetPublisherPages,
  delPublisherPage as actionDelPublisherPage,
  refreshPublisherPage as actionRefreshPublisherPage,
} from '../redux/actions/publisher';

export const usePublisher = () => {
  const dispatch = useDispatch();
  const { publisher } = useSelector(({ publisher }) => ({ publisher }));

  const getPublisherPages = (props) => {
    const response = actionGetPublisherPages(props);
    dispatch(response);
  };

  const delPublisherPage = (props) => {
    const response = actionDelPublisherPage(props);
    dispatch(response);
  };

  const refreshPublisherPage = (props) => {
    const response = actionRefreshPublisherPage(props);
    dispatch(response);
  };

  return { publisher, getPublisherPages, delPublisherPage, refreshPublisherPage };
};
