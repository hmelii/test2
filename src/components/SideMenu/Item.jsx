import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import { Icon } from '../common/Icon';

export const Item = ({ item: { id, title, url } }) => (
  <li className={`${styles.SideMenuItem}`}>
    <NavLink className={styles.SideMenuLink} to={url} activeClassName={styles.SideMenuLinkActive}>
      <span className={styles.SideMenuIco}>
        <Icon name={id} />
      </span>
      <span className={styles.SideMenuText}>{title}</span>
    </NavLink>
  </li>
);
