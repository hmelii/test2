import React from 'react';
import { Ring } from 'react-spinners-css';

import styles from './Loader.module.scss';
import { useLoader } from '../../../hooks/useLoader';

export const Loader = () => {
  const { loading } = useLoader();
  return loading ? (
    <div className={styles.Loader}>
      <Ring color="#1573ef" />
    </div>
  ) : null;
};
