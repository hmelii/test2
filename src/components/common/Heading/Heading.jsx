import React from 'react';
import styles from './Heading.module.scss';

export const Heading = ({ type = 'h1', children, className = '', prefix = null, ...props }) => {
  const Tag = type;
  return (
    <Tag className={`${styles.Heading} ${styles[type]} ${className}`} {...props}>
      {prefix} <span className={styles.HeadingText}>{children}</span>
    </Tag>
  );
};
