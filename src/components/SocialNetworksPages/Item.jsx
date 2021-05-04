import React from 'react';
import styles from './SocialNetworksPages.module.scss';
import { Header } from './Header';
import { SocialNetworksUsers } from '../SocialNetworksUsers';

export const Item = ({ network, accounts }) => (
  <div className={styles.SocialNetworksPagesItem}>
    <div id={network} className={styles.SocialNetworksPagesItemAnchor} />
    <Header network={network} />
    <SocialNetworksUsers accounts={accounts} />
  </div>
);
