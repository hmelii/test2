import { useSelector } from 'react-redux';

export const useInstagramAuthForm = () => {
  const { InstagramAuthForm } = useSelector(({ form }) => form);

  return { InstagramAuthForm };
};
