import React from 'react';
import styles from './StatusAva.module.scss';

import defaultAva from '../../assets/icons/avatar.svg';
import { Icon } from '../common/Icon';

export const StatusAva = ({ ava, status }) => {
  const src = ava || defaultAva;
  return (
    <div
      className={`${styles.StatusAva} ${styles[status]}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={styles.StatusAvaIco}>
        <Icon name={status} />
      </div>
    </div>
  );
};
