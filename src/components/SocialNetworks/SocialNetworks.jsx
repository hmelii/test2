import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './SocialNetworks.module.scss';
import { Network } from './Network';
import { INSTAGRAM_AUTH, TELEGRAM_AUTH } from '../../redux/types';

export const SocialNetworks = ({
  netrworks = [
    { id: 'vk' },
    {
      id: 'instagram',
      modalType: INSTAGRAM_AUTH,
      modalProps: {
        title: 'Подключение Instagram аккаунта',
      },
    },
    {
      id: 'telegram',
      modalType: TELEGRAM_AUTH,
      modalProps: {
        title: 'Подключение Telegram Аккаунта',
        overlayClick: false,
      },
    },
    { id: 'ok' },
    { id: 'twitter' },
    { id: 'facebook' },
  ],
  size = 'l',
  rounded = true,
  width = null,
}) => (
  <div className={styles.SocialNetworks}>
    <div className={styles.SocialNetworksInfo}>
      Чтобы делать публикации, смотреть аналитику и прогнозы добавьте страничку
    </div>
    <Container fluid>
      <Row noGutters className="justify-content-center">
        {netrworks.map((network = null) => (
          <Col md="auto" key={network.id}>
            <Network network={network} size={size} rounded={rounded} width={width} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);
