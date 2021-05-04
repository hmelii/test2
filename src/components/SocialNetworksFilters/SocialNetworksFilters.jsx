import React, { useState } from 'react';
import { Item } from './Item';
import styles from './SocialNetworksFilters.module.scss';

export const SocialNetworksFilters = ({ networks }) => {
  const [activeNetwork, setActiveNetwork] = useState(null);

  const handleClick = (network) => {
    setActiveNetwork(network);
  };
  return (
    <ul className={styles.SocialNetworksFilters}>
      {Object.keys(networks).map((network) => (
        <li className={styles.SocialNetworksFiltersItem} key={network}>
          <Item network={network} activeNetwork={activeNetwork} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};
