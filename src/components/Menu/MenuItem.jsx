import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

export const MenuItem = ({ item: { title, url } }) => (
  <li className={styles.MenuItem}>
    <NavLink className={styles.MenuLink} to={url} activeClassName={styles.MenuLinkActive}>
      {title}
    </NavLink>
  </li>
);
