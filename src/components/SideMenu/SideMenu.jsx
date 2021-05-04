import React from 'react';
import styles from './SideMenu.module.scss';
import { Item } from './Item';

export const SideMenu = ({ items = [] }) => (
  <nav className={styles.SideMenu}>
    <ul className={styles.SideMenuList}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  </nav>
);
