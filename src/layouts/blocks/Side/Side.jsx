import React from 'react';
import styles from './Side.module.scss';
import { SideMenu } from '../../../components/SideMenu';

export const Side = ({ className, sideNavItems = [] }) => (
  <aside className={`${styles.Side} ${className}`}>
    <SideMenu items={sideNavItems} />
  </aside>
);
