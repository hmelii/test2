import React from 'react';
import styles from './Content.module.scss';

export const Content = ({ children, className }) => (
  <main className={`${styles.Content} ${className}`}>{children}</main>
);
