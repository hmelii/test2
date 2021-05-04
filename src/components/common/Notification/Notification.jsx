import React, { useEffect } from 'react';
import styles from './Notification.module.scss';
import { useNotification } from '../../../hooks/useNotification';

export const Notification = () => {
  const { notification, hideNotification } = useNotification();

  useEffect(() => {
    if (notification) {
      setTimeout(() => hideNotification(), 3000);
    }
  }, [notification]);

  if (!notification) {
    return null;
  }

  return <div className={styles.Notification}>{notification}</div>;
};
