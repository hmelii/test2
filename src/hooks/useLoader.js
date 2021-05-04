import { useSelector } from 'react-redux';

export const useLoader = () => {
  const { loading } = useSelector(({ appReducer }) => appReducer);
  return { loading };
};
