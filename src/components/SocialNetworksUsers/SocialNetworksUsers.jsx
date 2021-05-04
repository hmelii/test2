import React from 'react';
import styles from './SocialNetworksUsers.module.scss';
import { Item } from './Item';

export const SocialNetworksUsers = ({ accounts }) => (
  <div className={styles.SocialNetworksUsers}>
    <ul className={styles.SocialNetworksUsersList}>
      {accounts.map((account) => (
        <li key={account.id} className={styles.SocialNetworksUsersItem}>
          <Item account={account} />
        </li>
      ))}
    </ul>
  </div>
);
