import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.Logo}>
    <NavLink className={styles.LogoLink} to="/">
      getUNIQ
    </NavLink>
  </div>
);
