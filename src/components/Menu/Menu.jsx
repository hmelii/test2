import React from 'react';
import styles from './Menu.module.scss';
import initialState from './state';
import { MenuItem } from './MenuItem';

export const Menu = ({ items = initialState.items }) => (
  <nav className={styles.Menu}>
    <ul className={styles.MenuList}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  </nav>
);
