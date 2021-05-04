import React, { useEffect, useState } from 'react';
import styles from './SocialNetworks.module.scss';
import { NetworkIcon } from '../common/NetworkIcon';
import { useModal } from '../../hooks/useModal';

export const Network = ({
  network: { id, modalType = null, modalProps = {} },
  size,
  rounded,
  width,
}) => {
  const { modalShow } = useModal();
  const [icoName, setIcoName] = useState(null);

  useEffect(() => {
    if (id && id !== icoName) {
      setIcoName(id);
    }
  }, [id]);

  const Icon = () => <NetworkIcon name={icoName} size={size} rounded={rounded} width={width} />;

  const handleClick = () => {
    modalShow(modalType, modalProps);
  };

  if (modalType) {
    return (
      <a
        role="button"
        tabIndex={0}
        className={styles.SocialNetworksButton}
        onClick={handleClick}
        onKeyPress={() => {}}
      >
        <Icon />
      </a>
    );
  }

  return (
    <span className={styles.SocialNetworksButton}>
      <Icon />
    </span>
  );
};
