import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '../../../components/Logo';
import { Menu } from '../../../components/Menu';

export const Header = ({ className }) => (
  <header className={`${styles.Header} ${className}`}>
    <Logo />
    <Menu />
  </header>
);
