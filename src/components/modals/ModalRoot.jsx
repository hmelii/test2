import React from 'react';
import Modal from 'react-modal';
import { useModal } from '../../hooks/useModal';
import { InstagramAuth } from './InstagramAuth';
import { TelegramAuth } from './TelegramAuth';
import { Button } from '../common/Form';
import { Icon } from '../common/Icon';
import { Heading } from '../common/Heading';
import styles from './ModalRoot.module.scss';

Modal.setAppElement('#root');

const MODAL_COMPONENTS = {
  INSTAGRAM_AUTH: InstagramAuth,
  TELEGRAM_AUTH: TelegramAuth,
};

export const ModalRoot = () => {
  const { modalHide, modalType, modalProps } = useModal();

  if (!modalType) {
    return null;
  }

  const closeModal = () => {
    modalHide();
  };

  const SpecificModal = MODAL_COMPONENTS[modalType];

  const { title = '', overlayClick = true } = modalProps;

  return (
    <Modal
      className={styles.Modal}
      isOpen
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={overlayClick}
      overlayClassName={styles.ModalOverlay}
    >
      <Button
        styling="simple"
        className={styles.ModalCloseButton}
        type="button"
        onClick={closeModal}
      >
        <Icon className={styles.ModalCloseButtonIco} name="close" />
      </Button>
      <Heading className={styles.ModalHeading} type="h3">
        {title}
      </Heading>
      <SpecificModal />
    </Modal>
  );
};
