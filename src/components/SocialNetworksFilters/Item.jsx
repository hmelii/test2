import React from 'react';
import styles from './SocialNetworksFilters.module.scss';
import { NetworkIcon } from '../common/NetworkIcon';
import config from '../../api/config';

export const Item = ({ network, handleClick, activeNetwork }) => (
  <a
    className={`${styles.SocialNetworksFiltersLink} ${
      activeNetwork === network ? styles.SocialNetworksFiltersLinkActive : ''
    }`}
    href={`#${network}`}
    onClick={() => handleClick(network)}
  >
    <NetworkIcon name={network} />
    <span className={styles.SocialNetworksFiltersText}>{config.SOCIALS_NETWORKS[network]}</span>
  </a>
);
