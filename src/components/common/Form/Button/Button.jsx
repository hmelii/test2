import React from 'react';
import styles from './Button.module.scss';

export const Button = ({
  onClick = () => {},
  className = '',
  link = false,
  loading = false,
  prefix = null,
  styling = 'bordered',
  children,
  ...rest
}) => {
  const ButtonElement = link ? 'a' : 'button';

  return (
    <ButtonElement
      className={`${styles.button} ${styles[styling]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        'loading...'
      ) : (
        <>
          {prefix && <span className={styles.buttonPrefix}>{prefix}</span>}
          {children ? <span className={styles.buttonText}>{children}</span> : ''}
        </>
      )}
    </ButtonElement>
  );
};
